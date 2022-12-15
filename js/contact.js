let recaptchaContactForm = document.getElementById("recaptcha-contact-form");
let contactUs = document.getElementById("contact-us");
if(!recaptchaContactForm) {
  divRecaptcha = document.createElement("div");
  divRecaptcha.setAttribute('data-netlify-recaptcha', 'true');
  recaptchaContactForm.appendChild(divRecaptcha);
}
