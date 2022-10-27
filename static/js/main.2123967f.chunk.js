(this.webpackJsonptextify=this.webpackJsonptextify||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(16),r=n.n(c),i=(n(22),n(10)),s=n(9),o=n(0);function d(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat("light"===e.mode?"dark":"light"," bg-").concat("light"===e.mode?"dark":"light"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(s.b,{className:"navbar-brand",to:"/Textify",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{className:"nav-link active","aria-current":"page",to:"/About",children:e.about})})}),Object(o.jsx)("span",{className:"navbar-text",children:Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",for:"flexSwitchCheckDefault",children:"Dark Mode"})]})})]})]})})}function b(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],c=n[1];return Object(o.jsxs)("div",{className:"border border-".concat("light"===e.mode?"dark":"light"," rounded-3 container py-3 my-3"),children:[Object(o.jsxs)("div",{className:"container py-3 my-3 bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light"),children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",style:{},children:"Textify your content in your way"}),Object(o.jsx)("textarea",{placeholder:"Enter Your Text Here",value:l,onChange:function(e){c(e.target.value)},className:"form-control bg-".concat(e.mode," text-").concat("light"===e.mode?"black":"white"),id:"exampleFormControlTextarea1",rows:"5"})]}),Object(o.jsx)("button",{disabled:0===l.split(" ").filter((function(e){return 0!==e.length})).length,className:"btn ".concat("light"===e.mode?"btn-primary":"btn-outline-primary"," text-light btn-sm mx-3 my-2"),onClick:function(){var t=l.toUpperCase();c(t),e.showAlert("Converted to Upper Case","info")},children:"Convert to Upper Case"}),Object(o.jsx)("button",{disabled:0===l.split(" ").filter((function(e){return 0!==e.length})).length,className:"btn ".concat("light"===e.mode?"btn-primary":"btn-outline-primary"," text-light btn-sm mx-3 my-2"),onClick:function(){var t=l.toLowerCase();c(t),e.showAlert("Converted to Lower Case","info")},children:"Convert to Lower Case"}),Object(o.jsx)("button",{disabled:0===l.split(" ").filter((function(e){return 0!==e.length})).length,className:"btn ".concat("light"===e.mode?"btn-primary":"btn-outline-primary"," text-light btn-sm mx-3 my-2"),onClick:function(){for(var t="",n=l.split(/\s+/),a=0;a<n.length;a++){var r=n[a][0].toUpperCase(),i=n[a].slice(1).toLowerCase();if(i=r+i,console.log(i),a===n.length-1){t+=i;break}t+=i+" "}c(t),e.showAlert("Text has been capitalized.(First letter of each word will be upper case & rest would be lower case)","info")},children:"Capitalisation"}),Object(o.jsx)("button",{disabled:0===l.split(" ").filter((function(e){return 0!==e.length})).length,className:"btn ".concat("light"===e.mode?"btn-primary":"btn-outline-primary"," text-light btn-sm mx-3 my-2"),onClick:function(){for(var t="",n=0;n<l.length;n++)t+=l[n]===l[n].toUpperCase()?l[n].toLowerCase():l[n].toUpperCase();c(t),e.showAlert("Cases have been interchanged","info")},children:"Invert the Cases"}),Object(o.jsx)("button",{disabled:0===l.length,className:"btn ".concat("light"===e.mode?"btn-primary":"btn-outline-primary"," text-light btn-sm mx-3 my-2"),onClick:function(){var t=l.split(/\s+/);c(t.join(" ")),e.showAlert("Extra Spaces has been removed","info")},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{disabled:0===l.split(" ").filter((function(e){return 0!==e.length})).length,className:"btn ".concat("light"===e.mode?"btn-primary":"btn-outline-primary"," text-light btn-sm mx-3 my-2"),onClick:function(){c(""),e.showAlert("Text Cleared","info")},children:"Clear"}),Object(o.jsx)("button",{disabled:0===l.split(" ").filter((function(e){return 0!==e.length})).length,className:"btn ".concat("light"===e.mode?"btn-primary":"btn-outline-primary"," text-light btn-sm mx-3 my-2"),onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Text Copied!","info")},children:"Copy Text"})]}),Object(o.jsxs)("div",{className:"container my-3 bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("h2",{children:"Short Overview of Your Text"}),Object(o.jsxs)("p",{children:["No. of words in your text: ",l.split(/\s+/).filter((function(e){return 0!==e.length})).length]}),Object(o.jsxs)("p",{children:["No. of characters used in your text: ",l.length]}),Object(o.jsxs)("p",{children:["Avg time taken to read: ",(.18*l.split(/\s+/).filter((function(e){return 0!==e.length})).length).toFixed(2)," seconds"]})]})]})}function h(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)("div",{class:"alert alert-".concat(e.alert.type),role:"alert",children:e.alert.message})})}function m(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container col-xxl-8 px-4 py-5 text-".concat("light"===e.mode?"dark":"light"),children:Object(o.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",children:[Object(o.jsx)("div",{className:"col-10 col-sm-8 col-lg-6",children:Object(o.jsx)("img",{src:"https://bulk.ly/wp-content/uploads/2020/12/social-media-tools-3.png",className:"d-block mx-lg-auto img-fluid",alt:"Bootstrap Themes",width:"700",height:"500",loading:"lazy"})}),Object(o.jsxs)("div",{className:"col-lg-6",children:[Object(o.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3",children:"Developer:"}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{children:"Aarjav Desai"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"lead",children:"A coding enthusiast & Fullstack Developer interested in Software & Game Development with a good command over NodeJS. I also know Game Development with Unity & C#."}),Object(o.jsxs)("p",{className:"lead",children:[Object(o.jsx)("strong",{children:"Educational Status:"})," Currently a IIIrd yearite persuing B. Tech in Electronics & Communications Engineering holding 8.3 CGPA"]}),Object(o.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-start"})]})]})})})}var j=n(2);var x=function(){var e=Object(a.useState)("light"),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),r=Object(i.a)(c,2),x=r[0],g=r[1],u=function(e,t){g({message:e,type:t}),setTimeout((function(){g(null)}),1e3)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(d,{title:"TextUtils",mode:n,toggleMode:function(){l("light"===n?"dark":"light"),document.body.style.backgroundColor="light"===n?"#212529":"#f8f9fa",u("light"===n?"Dark mode has been enabled":"Dark mode has been disabled","success")},about:"About"}),Object(o.jsx)(h,{alert:x}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/about",children:Object(o.jsx)(m,{mode:n})}),Object(o.jsx)(j.a,{exact:!0,path:"/Textify",children:Object(o.jsx)(b,{showAlert:u,mode:n})})]})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.2123967f.chunk.js.map