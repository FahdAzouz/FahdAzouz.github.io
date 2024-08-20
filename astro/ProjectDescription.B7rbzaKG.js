import{r as d}from"./index.DhYZZe0J.js";var c={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=d,p=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function x(r,e,l){var t,n={},a=null,o=null;l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(t in e)f.call(e,t)&&!b.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:p,type:r,key:a,ref:o,props:n,_owner:h.current}}i.Fragment=u;i.jsx=x;i.jsxs=x;c.exports=i;var s=c.exports;const y=({project:r})=>s.jsxs("div",{className:"bg-neutrals-800 text-neutrals-50 p-6 rounded-lg shadow-lg",children:[s.jsx("h2",{className:"text-3xl font-bold mb-4",children:r.title}),s.jsx("p",{className:"text-xl mb-4 text-neutrals-300",children:r.shortDescription}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-2xl font-semibold mb-2",children:"Key Features:"}),s.jsx("ul",{className:"list-disc list-inside space-y-2",children:r.fullDescription.split(`

`).map((e,l)=>s.jsx("li",{className:"ml-4",children:e.trim()},l))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-2xl font-semibold mb-2",children:"Technologies Used:"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:r.technologies.map((e,l)=>s.jsx("span",{className:"bg-primary text-neutrals-50 px-3 py-1 rounded-full text-sm",children:e},l))})]}),s.jsxs("a",{href:r.githubLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center bg-secondary text-neutrals-50 px-4 py-2 rounded hover:bg-secondary/80 transition-colors",children:[s.jsx("span",{className:"mr-2",children:"🔗"})," ","View on GitHub"]})]});export{y as default};
