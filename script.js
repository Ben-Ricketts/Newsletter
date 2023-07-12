function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Usage example
const inputEmail = document.getElementById("input-email").value;
const isValidEmail = validateEmail(inputEmail);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const inputEmail = document.getElementById("input-email").value;
    const isValidEmail = validateEmail(inputEmail);
    if (isValidEmail) {
      window.location.href = "success.html";
    } else {
      console.log("Wrong");
    }
  }
});
