webpackJsonp([62],{491:function(e,n){e.exports=[{type:"heading",children:["Get Started"],depth:1},{type:"paragraph",children:["The library is a high-level abstraction API to create and run operations on different backends (WebGL, WASM, JS). GammaCV also enables you to construct operation graphs and control the flow of execution."]},{type:"space",children:[]},{type:"heading",children:["Installation"],depth:2},{type:"paragraph",children:["To use GammaCV you first need to install it. \nTo install the latest stable version run:\n",{type:"codespan",children:"npm install gammacv --save"}]},{type:"space",children:[]},{type:"heading",children:["Core Concepts"],depth:2},{type:"paragraph",children:["The basic unit of the library is tensor, ",{type:"codespan",children:"Tensor"}," allows you to create N-dimensional vector and store it in memory using TypedArrays. The second part of the library is ",{type:"codespan",children:"Operation"},", operation under the hood is graph node which will have multiple inputs and always produce a single output. The third component is ",{type:"codespan",children:"Session"},", the session is runtime which allows you to run computational graphs on different backends with the same API. For the better understanding of how it works let's create a simple program and run it on GPU using WebGL:"]},{type:"space",children:[]},{type:"code",children:"const imgURL = 'https://avatars1.githubusercontent.com/u/33897736?s=400&v=4';\n\n// load image from URL or base64 string and store a result in input tensor\ngm.imageTensorFromURL(imgURL, 'uint8', [400, 400, 4], true).then((input) => {\n  // use tesor as input of build in Gaussian Blur operation\n  // operation constructor return you compiled operation instance\n  const operation = gm.sobelOperator(input);\n\n  // create the tensor for operation output\n  const output = gm.tensorFrom(operation);\n\n  // then we need to create Session which will run created\n  // graph using GPU power and read result to ouput tensor\n  const sess = new gm.Session();\n  // then you should init operation for current session\n  sess.init(operation);\n  // and finaly for visualize result we need create canvas\n  const canvas = gm.canvasCreate(400, 400);\n\n  document.body.appendChild(canvas);\n  sess.runOp(operation, 0, output);\n\n  gm.canvasFromTensor(canvas, output);\n});",lang:"JS"}]}});