let signInButton = document.getElementById("signInBtn");
let signUpButton = document.getElementById("signUpBtn");
let name_field = document.getElementById("name-field");

signInButton.addEventListener("click", () => {
  name_field.style.maxHeight = "0";
});

signUpButton.addEventListener("click", () => {
  name_field.style.maxHeight = "200px";
});
