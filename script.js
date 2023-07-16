const inputEmail = document.getElementById("input-email");
const isValidEmail = validateEmail(inputEmail);
let emailErrorMessage = document.querySelector(".hidden");
let subscribeBtn = document.getElementById("sub-btn");
let EmailAddress = document.getElementById("email-confirm");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

let checkEmailValidation = function () {
  localStorage.setItem("emailSaved", inputEmail.value);
  const isValidEmail = validateEmail(inputEmail.value);

  if (isValidEmail) {
    window.location.href = "success.html";
  } else {
    emailErrorMessage.classList.remove("hidden");

    inputEmail.style.color = "red";
    inputEmail.style.backgroundColor = "rgba(255,0,0,0.3)";
  }
};

if (EmailAddress) {
  EmailAddress.textContent = localStorage.getItem("emailSaved");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkEmailValidation();
  }
});

subscribeBtn.addEventListener("click", checkEmailValidation);
