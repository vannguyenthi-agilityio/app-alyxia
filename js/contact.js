let recaptchaContactForm = document.getElementById("recaptcha-contact-form");
let contactUs = document.getElementById("contact-us");

function setRecaptcha() {
  if(!recaptchaContactForm) {
    divRecaptcha = document.createElement("div");
    divRecaptcha.setAttribute('data-netlify-recaptcha', 'true');
    recaptchaContactForm.appendChild(divRecaptcha);
  }
}

contactUs.addEventListener("click", setRecaptcha);
