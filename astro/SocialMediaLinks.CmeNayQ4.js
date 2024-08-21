import{j as s}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...t)=>t.filter((e,r,a)=>!!e&&a.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:o,iconNode:m,...h},d)=>n.createElement("svg",{ref:d,...k,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:l("lucide",c),...h},[...m.map(([u,p])=>n.createElement(u,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(t,e)=>{const r=n.forwardRef(({className:a,...c},o)=>n.createElement(w,{ref:o,iconNode:e,className:l(`lucide-${f(t)}`,a),...c}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=i("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=i("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),j=()=>{const t=[{name:"GitHub",icon:x,url:"https://github.com/FahdAzouz"},{name:"LinkedIn",icon:y,url:"https://www.linkedin.com/in/fahd-azouz/"},{name:"Twitter",icon:g,url:"https://twitter.com/FahdAzouz"},{name:"Email",icon:b,url:"mailto:fahdstudies00@gmail.com"}];return s.jsx("div",{className:"flex justify-center pb-10 space-x-4",children:t.map(e=>s.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-neutrals-300 hover:text-primary transition-colors","aria-label":e.name,children:s.jsx(e.icon,{size:24})},e.name))})};export{j as default};
