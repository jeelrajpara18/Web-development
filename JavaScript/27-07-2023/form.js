let userName = document.getElementById('name');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let pass2 = document.getElementById('pass2');

// Function for error
function setError(element, message) {
    let input = element.parentElement;
    let error = input.querySelector('.error');

    error.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

// Function for success
function setSuccess(element) {
    let input = element.parentElement;
    let error = input.querySelector('.error');

    error.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}

// Function for successfully submission
function isSuccessFull(){
    let formContainer = document.querySelector('.container');
    let msg = document.getElementById('submittedMsg');

    formContainer.style.display = 'none';
    msg.style.display = 'block';
}

// Function for password validation
function passValid(inputPass) {
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let number = '0123456789';
    let symbol = '~!@#$%^&*(){}[]><?\/';

    let isUpperCase = false;
    let isLowerCase = false;
    let isNumber = false;
    let isSymbol = false;

    for (let char of inputPass) {
        if (upperCase.includes(char)) {
            isUpperCase = true;
        }
        else if (lowerCase.includes(char)) {
            isLowerCase = true;
        }
        else if (number.includes(char)) {
            isNumber = true;
        }
        else if (symbol.includes(char)) {
            isSymbol = true;
        }
    }
    return isUpperCase && isLowerCase && isNumber && isSymbol;
}

// Function for form validation
function validateForm() {
    let userNameValue = userName.value.trim();
    let emailValue = email.value.trim();
    let passvalue = pass.value.trim();
    let pass2Value = pass2.value.trim();

    // checking condition for all
    // for username
    if (userNameValue == '') {
        setError(userName, 'Username is required')
    }
    else {
        setSuccess(userName);
    }

    // for email

    if (emailValue == '') {
        setError(email, 'Email is required')
    }
    else {
        setSuccess(email);
    }

    //for password
    if (passvalue == '') {
        setError(pass, 'Password is required')
    }
    else if (passvalue.length < 8) {
        setError(pass, 'Password should be greater than 8')
    }
    else if (!passValid(passvalue)) {
        setError(pass, 'Enter a valid password')
    }
    else {
        setSuccess(pass)
    }

    //password again
    if (pass2Value == '') {
        setError(pass2, 'Password is required');
    }
    else if (pass2Value.length < 8) {
        setError(pass2, 'Password should be greater than 8');
    }
    else if (pass2Value !== passvalue) {
        setError(pass2, 'Both the password should be same');
    }
    else {
        setSuccess(pass2);
    }

    if (userNameValue !== '' && emailValue !== '' && passvalue !== '' && passvalue.length >= 8 && pass2Value !== '' && pass2Value.length >= 8 && passValid(passvalue) && passValid(pass2Value)) {
        isSuccessFull();
        // alert('Your form is successfully submitted')
    }
}

// Event listner
let form = document.getElementById('form-input');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
})