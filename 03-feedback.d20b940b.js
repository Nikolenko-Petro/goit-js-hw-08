!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]'),r="feedback-form-state";e.addEventListener("input",throttle((function(e){var o={email:t.value,message:a.value};localStorage.setItem(r,JSON.stringify(o))}),500)),e.addEventListener("submit",(function(o){o.preventDefault(),console.log({email:t.value,message:a.value}),e.reset(),localStorage.removeItem(r)}));var o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(r);o&&(t.value=o.email,a.value=o.message)}();
//# sourceMappingURL=03-feedback.d20b940b.js.map
