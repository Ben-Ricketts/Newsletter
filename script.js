const inputEmail = document.getElementById("input-email").value;
const email = document.getElementById("input-email");
const isValidEmail = validateEmail(inputEmail);
let emailErrorMessage = document.querySelector(".hidden");
let subscribeBtn = document.getElementById("sub-btn");
let EmailAddress = document.querySelector(".email-confirm");
let emailAddressInput = document.getElementById("input-email");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

let checkEmailValidation = function () {
  const inputEmail = document.getElementById("input-email").value;
  const isValidEmail = validateEmail(inputEmail);

  if (isValidEmail) {
    window.location.href = "success.html";
  } else {
    emailErrorMessage.classList.remove("hidden");

    email.style.color = "red";

    email.style.backgroundColor = "rgba(255,0,0,0.3)";
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkEmailValidation();
  }
});

subscribeBtn.addEventListener("click", checkEmailValidation);
