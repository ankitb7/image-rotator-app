(this["webpackJsonpimage-rotator-app"]=this["webpackJsonpimage-rotator-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),i=a.n(r),c=a(4),o=a.n(c),s=(a(10),a(2)),u=function(e,t,a,n,r,i){var c=e*i-t*r,o=e*r+t*i;return{x:Math.round(c+a),y:Math.round(o+n)}},l=function(e,t,a,n){return a>=0&&a<t&&n>=0&&n<e},d=function(e){var t=document.createElement("canvas"),a=t.getContext("2d");return t.width=e.width,t.height=e.height,{canvas:t,context:a}},h=function(e,t,a,n){for(var r=Math.sin(n),i=Math.cos(n),c=function(e,t){return{centerHeight:Math.trunc(e/2),centerWidth:Math.trunc(t/2)}}(t,a),o=c.centerHeight,s=c.centerWidth,d=function(e,t,a,n){var r=Math.round(Math.abs(e*n)+Math.abs(t*a));return{newWidth:Math.round(Math.abs(t*n)+Math.abs(e*a)),newHeight:r}}(a,t,r,i),h=d.newHeight,g=d.newWidth,m=new Uint8ClampedArray(4*g*h),j=4*a,f=0,b=0;b<j*t;b+=4){var v=Math.round(b%j/4),O=u(v-s,f-o,s,o,r,i);if(O.x+=Math.round((g-a)/2),O.y+=Math.round((h-t)/2),l(h,g,O.x,O.y))for(var p=4*O.x+O.y*(4*g),x=0;x<4;x++)m[p+x]=e[b+x];b%j===0&&f++}return new ImageData(Uint8ClampedArray.from(m),g,h)},g=(a(11),function(e){var t=e.image,a=e.rotatedImage,r=a||t;return Object(n.jsx)("div",{className:"image-frame",children:r||Object(n.jsx)("div",{className:"placeholder-text",children:"Please select an image"})})});g.defaultProps={image:null,rotatedImage:null};var m=g,j=(a(12),function(e){var t=e.setAngle,a=Object(r.useState)(0),i=Object(s.a)(a,2),c=i[0],o=i[1];return Object(r.useEffect)((function(){return t(c)}),[c]),Object(n.jsx)("input",{type:"text",pattern:"([0-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360)",placeholder:"Degrees",value:c,onInput:function(e){var t=e.target.validity.valid?window.Number(e.target.value):c;o(t)}})});j.defaultProps={setAngle:function(){}};var f=j,b=function(e){var t=e.setImage,a=e.image,i=e.rotatedImage,c=e.imageDimensions,o=e.renderTime,u=e.rotateImage,l=Object(r.useState)(0),d=Object(s.a)(l,2),h=d[0],g=d[1];return Object(n.jsxs)("div",{className:"action-panel",children:[Object(n.jsx)("input",{className:"fileInput",type:"file",accept:"image/*",onChange:t}),a&&Object(n.jsxs)("div",{className:"rotate-panel",children:[Object(n.jsx)("div",{className:"info",children:"Original Image Dimensions: ".concat(c.width,"px width x ").concat(c.height,"px height")}),i&&Object(n.jsx)("div",{className:"info",children:"Render Time: ".concat(null===o||void 0===o?void 0:o.toFixed(2),"ms")}),Object(n.jsxs)("p",{children:[Object(n.jsx)(f,{setAngle:g}),Object(n.jsx)("button",{onClick:function(){return u(h)},children:"Apply"})]})]})]})};b.defaultProps={setImage:function(){},image:null,rotatedImage:null,imageDimensions:{width:0,height:0},renderTime:0,rotateImage:null};var v=b,O=(a(13),function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(null),o=Object(s.a)(c,2),u=o[0],l=o[1],g=Object(r.useState)(null),j=Object(s.a)(g,2),f=j[0],b=j[1],O=Object(r.useState)({width:0,height:0}),p=Object(s.a)(O,2),x=p[0],w=p[1],I=Object(r.useState)(0),M=Object(s.a)(I,2),D=M[0],y=M[1],N=Object(r.useCallback)((function(e){var t=performance.now(),r=e*(Math.PI/180),i=h(a,x.height,x.width,r);console.log("rotatedImageData",i);var c=d(i),o=c.canvas;c.context.putImageData(i,0,0),(new Image).src=o.toDataURL(),b(Object(n.jsx)("img",{src:o.toDataURL(),alt:"Rotated Document"}));var s=performance.now();y(s-t)}),[a,x]);return Object(n.jsxs)("div",{className:"image-editor",children:[Object(n.jsx)(m,{image:u,rotatedImage:f}),Object(n.jsx)(v,{setImage:function(e){e.preventDefault();var t=new FileReader,a=e.target.files[0];b(null),t.onloadend=function(){t.result&&l(Object(n.jsx)("img",{src:t.result,alt:"Original Document"}));var e=new Image;e.onload=function(){w({width:this.width,height:this.height});var t=d(e).context;t.drawImage(e,0,0);var a=t.getImageData(0,0,e.width,e.height);i(a.data)},e.src=t.result},t.readAsDataURL(a)},image:u,imageDimensions:x,rotatedImage:f,renderTime:D,rotateImage:N})]})});a(14);var p=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(O,{})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),x()}],[[15,1,2]]]);
//# sourceMappingURL=main.f225a23b.chunk.js.map