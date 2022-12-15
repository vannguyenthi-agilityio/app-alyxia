let recaptchaContactForm = document.getElementById("recaptcha-contact-form");
let contactUs = document.getElementById("contact-us");

function setRecaptcha() {
  if(!recaptchaContactForm) {
    iframe.setAttribute('data-netlify-recaptcha', 'true');
    iframeWrapper.appendChild(iframe)
  }
}

contactUs.addEventListener("click", setRecaptcha);
