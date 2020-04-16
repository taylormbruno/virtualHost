import API from "../../utils/API";
const reSpec = /^\w+$/;
const reNum = /[0-9]/;
const reLow = /[a-z]/;
const reUp = /[A-Z]/;
// eslint-disable-next-line
const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errors = {
  username: false,
  uniqueUser: false,
  unError: false,
  password: false,
  passError: false,
  passLength: false,
  userInPass: false,
  confirmError: false,
  firstError: false,
  lastError: false,
  email: false,
  emailError: false,
  uniqueEmail: false,
};

function validateForm(form) {
  // unique usernames and emails
  console.log(form.username);
  let uniqueUsername;
  let uniqueEmail;

  API.validSignup({ username: form.username, email: form.email }).then(
    (response) => {
      console.log("response");
      console.log(response.data);
      uniqueUsername = response.data.username;
      uniqueEmail = response.data.email;
    }
  );
  // username
  if (uniqueUsername === false) {
    // alert("Username must be unique");
    errors.username = true;
    errors.uniqueUser = true;
  }
  if (!reSpec.test(form.username)) {
    // alert(
    //   "Error: Username must contain only letters, numbers and underscores!"
    // );
    errors.username = true;
    errors.unError = true;
  }

  // password
  if (form.pass1 === undefined || form.pass1.length < 6) {
    // alert("Error: Password must contain at least six characters!");
    errors.password = true;
    errors.passLength = true;
  }
  if (!reNum.test(form.pass1)) {
    // alert("Error: password must contain at least one number (0-9)!");
    errors.password = true;
    errors.passError = true;
  }
  if (!reLow.test(form.pass1)) {
    // alert("Error: password must contain at least one lowercase letter (a-z)!");
    errors.password = true;
    errors.passError = true;
    // return false;
  }
  if (!reUp.test(form.pass1)) {
    // alert("Error: password must contain at least one uppercase letter (A-Z)!");
    errors.password = true;
    errors.passError = true;
    // return false;
  }

  if (!errors.password) {
    const passInclUser = form.pass1.includes(form.username);
    if (passInclUser) {
      // alert("Error: Password can not contain username!");
      // return false;
      errors.password = true;
      errors.userInPass = true;
    }
  }

  if (form.pass1 !== form.pass2) {
    // alert("Error: Passwords do not match!");
    errors.confirmError = true;
    // return false;
  }

  // email
  if (form.email) {
    if (!reEmail.test(form.email.toLowerCase())) {
      // alert("Error: Please enter a valid email!");
      errors.email = true;
      errors.emailError = true;
      // return false;
    }
    if (uniqueEmail === false) {
      // alert("Email must be unique");
      errors.email = true;
      errors.uniqueEmail = true;
      // return false;
    }
  } else if (!form.email) {
    errors.email = true;
    errors.emailError = true;
  }

  // first name
  if (!form.first_name) {
    // alert("Error: Please enter a valid first name!");
    errors.firstError = true;
    // return false;
  }

  // last name
  if (!form.last_name) {
    // alert("Error: Please enter a valid last name!");
    errors.lastError = true;
    // return false;
  }

  return errors;
}

export default validateForm;
