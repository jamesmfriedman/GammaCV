webpackJsonp([86],{525:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(126),r=n.n(t),u=n(80);a.default={op:function(e,a){var n=e,t=u.w[a.CONV2D.kernel];return u.n(n,t(),a.CONV2D.factor,a.CONV2D.bias)},params:{CONV2D:{name:"CONVOLUTION",kernel:{name:"Kernel",type:"constant",values:r()(u.w).map(function(e){return{name:e,value:e}})},factor:{name:"Factor",type:"uniform",min:0,max:3,step:.1,default:1},bias:{name:"Bias",type:"uniform",min:-3,max:3,step:.1,default:0}}}}}});