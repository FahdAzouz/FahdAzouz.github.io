import"./Header.astro_astro_type_script_index_0_lang.Bt1AhoEv.js";const t=document.getElementById("contact-form"),e=document.getElementById("form-status");t&&e&&t.addEventListener("submit",async s=>{s.preventDefault(),e&&(e.textContent="Sending...",e.classList.remove("hidden","text-green-500","text-red-500"),e.classList.add("text-yellow-500"));const n=new FormData(t),a=Object.fromEntries(n);try{if((await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok)e&&(e.textContent="Message sent successfully!",e.classList.remove("text-yellow-500"),e.classList.add("text-green-500")),t.reset();else throw new Error("Failed to send message")}catch{e&&(e.textContent="Failed to send message. Please try again later.",e.classList.remove("text-yellow-500"),e.classList.add("text-red-500"))}});