import"./Header.astro_astro_type_script_index_0_lang.Bt1AhoEv.js";const e=document.querySelectorAll("[data-index]"),l=document.getElementById("prevImage"),a=document.getElementById("nextImage");let t=0;function s(n){e.forEach((c,o)=>{c.classList.toggle("opacity-0",o!==n),c.classList.toggle("opacity-100",o===n)})}l&&a&&(l.addEventListener("click",()=>{t=(t-1+e.length)%e.length,s(t)}),a.addEventListener("click",()=>{t=(t+1)%e.length,s(t)}));