/**
 * @license MIT
 * @author Arkadiy Pilguk(apilguk@gmail.com)
 * @author Mihail Zachepilo(mihailzachepilo@gmail.com)
 * Copyright 2018 Peculiar Ventures and Pentatonica.
 * All rights reserved.
 */

import Operation from './operation';
import GLTexture from './texture';
import Tensor from './tensor';
import ENV from './environment';
import * as utils from '../utils';

/**
 * @class Session
 * @description This is a runtime which allows you to run computational graphs on different backends
 */
export default class Session {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.initWebGL(this.canvas);

    this.operation = {};
    this.texture = {};
    this.textureCount = 0;
  }

  initWebGL(canvas, opts) {
    this.canvas = canvas;
    const gl = this.canvas.getContext('webgl', opts);
    const float32Ext = gl.getExtension('OES_texture_float');

    utils.assert(
      !!gl,
      'WebGL not supported.',
    );
    utils.assert(
      !!float32Ext,
      'Unable to find extension OES_texture_float',
    );

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.gl = gl;
  }

  /**
   * @description Intialize operations for session
   * @param {Operation} node - operation chain to be used in session
   */
  init(node) {
    // Make sure we trying to initialize true Operation
    utils.assert(
      !!node,
      'Session: Unable to initialize undefined operation',
    );

    utils.assert(
      utils.isOperation(node) || utils.isTensor(node),
      'Session: Unable to initialize operation with invalid input type',
    );

    if (utils.isOperation(node)) {
      // Traversing of all the operations and flatten it to key-value storage
      node.traverse((input, sess) => {
        sess.operation[input.name] = input;
      }, this);
    }

    if (utils.isTensor(node)) {
      this.operation[node.name] = node;
    }

    this.update();
  }

  update() {
    const gl = this.gl;
    const opKeys = Object.keys(this.operation);

    for (let i = 0; i < opKeys.length; i += 1) {
      const operation = this.operation[opKeys[i]];

      if (operation instanceof Operation) {
        operation.init(this.gl);
      }

      if (!this.texture[opKeys[i]]) {
        this.texture[opKeys[i]] = new GLTexture(
          operation.dtype,
          this.gl,
          this.textureCount,
          operation.shape,
        );

        if (operation instanceof Operation) {
          gl.bindFramebuffer(gl.FRAMEBUFFER, operation.framebuffer);
          gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0,
            gl.TEXTURE_2D,
            this.texture[opKeys[i]].ctx,
            0,
          );
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }

        this.textureCount += 1;
      }
    }
  }

  /**
   * @description Run Operation
   * @param {Operation} op - operation to run
   * @param {*} ctx - context of a run, passing the same context twice in a raw
   *    will use cached result
   * @param {Tensor} [output] - if passed, the output is put into it.
   */
  runOp(op, ctx, output = false) {
    const sequence = op.sequence;
    let isRecalculated = false;

    for (let i = 0; i < sequence.length; i += 1) {
      const key = sequence[i];
      const operation = this.operation[key];
      const isLastOp = i === (sequence.length - 1);

      if (operation.run(this, ctx, isRecalculated)) {
        isRecalculated = true;
      } else {
        isRecalculated = false;
      }

      if (output && output instanceof Tensor && isLastOp) {
        this.readToTensor(output);
      }
    }
  }

  /**
   * @description Destroy all initialized operations,
   * texture and outher data connected this session.
   */
  destroy() {
    const glLoseContext = this.gl.getExtension('WEBGL_lose_context');
    const textures = Object.keys(this.texture);
    const operations = Object.keys(this.operation);

    if (glLoseContext) {
      glLoseContext.loseContext();
    }

    for (let i = 0; i < textures.length; i += 1) {
      this.texture[textures[i]].delete();
    }

    for (let i = 0; i < operations.length; i += 1) {
      const op = this.operation[operations[i]];

      if (op instanceof Operation) {
        op.destroy();
      }
    }

    this.canvas = null;
    this.operation = {};
    this.texture = {};
    this.gl = null;
    this.textureCount = 0;
  }

  readToTensor(tensor) {
    const gl = this.gl;
    let width = tensor.shape[1];
    let type = gl.UNSIGNED_BYTE;
    let data = tensor.data;

    if (tensor.dtype === 'float32') {
      if (ENV.SUPPORTS_FLOAT_TEXTURES) {
        type = gl.FLOAT;
      } else {
        width *= 4;
        data = tensor.uint8View;
      }
    }

    gl.readPixels(
      0,
      0,
      width,
      tensor.shape[0],
      gl.RGBA,
      type,
      data,
    );
  }
}
