let recaptchaContactForm = document.getElementById("recaptcha-contact-form");
divRecaptcha = document.createElement("div");
divRecaptcha.setAttribute('data-netlify-recaptcha', 'true');
recaptchaContactForm.appendChild(divRecaptcha);
divRecaptcha.focus();
