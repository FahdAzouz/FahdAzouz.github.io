import{j as t}from"./jsx-runtime.7faW4zRM.js";import{r as o}from"./index.DhYZZe0J.js";import{c as r}from"./createLucideIcon.B92Bwqf4.js";/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=r("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),k=()=>{const[e,a]=o.useState(!1);o.useEffect(()=>{const s=localStorage.getItem("theme");a(s==="dark"),document.documentElement.classList.toggle("dark",s==="dark")},[]);const c=()=>{a(!e),document.documentElement.classList.toggle("dark"),localStorage.setItem("theme",e?"light":"dark")};return t.jsx("button",{onClick:c,className:"p-2 rounded-full bg-neutrals-200 dark:bg-neutrals-700 text-neutrals-800 dark:text-neutrals-200","aria-label":"Toggle theme",children:e?t.jsx(m,{size:20}):t.jsx(l,{size:20})})};export{k as default};
