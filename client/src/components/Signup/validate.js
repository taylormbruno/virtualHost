const reSpec = /^\w+$/;
const reNum = /[0-9]/;
const reLow = /[a-z]/;
const reUp = /[A-Z]/;

function validateForm(form) {
    // username
    if(!reSpec.test(form.username)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        return false;
    }
    // password
    if(form.pass1.length < 6) {
        alert("Error: Password must contain at least six characters!");
        // event.target.focus()
        return false;
    }
    if(!reNum.test(form.pass1)) {
        alert("Error: password must contain at least one number (0-9)!");
        return false;
    }
    if(!reLow.test(form.pass1)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        return false;
    }
    if(!reUp.test(form.pass1)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        return false;
    }
    if(form.pass1 === form.username) {
        alert("Error: Password must be different from Username!");
        return false;
    }
    if(form.pass1 !== form.pass2) {
        alert("Error: Passwords do not match!");
        return false;
    }
    else {
        alert(`Welcome ${form.first_name} ${form.last_name}`);
        return true;
    }
}

export default validateForm;