let recaptchaContactForm = document.getElementById("recaptcha-contact-form");
let contactUs = document.getElementById("contact-us");

function setRecaptcha() {
  if(!recaptchaContactForm) {
    recaptchaContactForm.setAttribute('data-netlify-recaptcha', 'true');
  }
}

contactUs.addEventListener("click", setRecaptcha);
