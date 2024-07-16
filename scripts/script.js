// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const confirmPassword = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

email.onkeyup = () => {
  email.classList.remove("is-valid");
  email.classList.remove("is-invalid");
};

password.onkeyup = () => {
  password.classList.remove("is-valid");
  password.classList.remove("is-invalid");
};

confirmPassword.onkeyup = () => {
  confirmPassword.classList.remove("is-valid");
  confirmPassword.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  let isConfirmPasswordOk = false;

  // validate first name
  if (firstNameInput.value === '') {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value.trim() === '') {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  // validate email
  if (validateEmail(email.value)) {
    email.classList.add("is-valid");
    isEmailOk = true;
  } else {
    email.classList.add("is-invalid");
    isEmailOk = false;
  }
  // validate password
  if (password.value === '') {
    password.classList.add("is-invalid");
  } else if(password.value.length < 6){
    password.classList.add("is-invalid");
  } else {
    password.classList.add("is-valid");
    isPasswordOk = true;
  }
  // validate confirm password
  if (confirmPassword.value === '') {
    confirmPassword.classList.add("is-invalid");
  } else if(confirmPassword.value!== password.value){
    confirmPassword.classList.add("is-invalid");
  } else {
    confirmPassword.classList.add("is-valid");
    isConfirmPasswordOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isConfirmPasswordOk) alert("Registered successfully");
};

// add callback function for Reset button.
let form = document.querySelector("#regform");
let inputs = [firstNameInput, lastNameInput, email, password, confirmPassword];
resetBtn.onclick = () => {
  form.reset();
  inputs.forEach(input => {
    input.value = ''; 
    input.classList.remove("is-valid"); 
    input.classList.remove("is-invalid"); 
  });
};