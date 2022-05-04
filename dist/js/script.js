//Form Validation

const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone_number');
const password = document.querySelector('#password');
const conPassword = document.querySelector('#con-password');
const btn = document.querySelector('.button');
const numGuide = document.querySelector('.num-guide');
const form = document.getElementsByTagName('form')[0];
const passGuide = document.querySelector('.pass-guide');
const checkMatch = document.querySelector('.check-match');

firstName.addEventListener('input', (e) => {
    if(firstName.validity.valueMissing) {
        firstName.setCustomValidity('This field is required');
        firstName.reportValidity();
    } else {
        firstName.setCustomValidity('');
    }
});

lastName.addEventListener('input', (e) => {
    if(lastName.validity.valueMissing) {
        lastName.setCustomValidity('This field is required');
        lastName.reportValidity();
    } else {
        lastName.setCustomValidity('');
    }
});

email.addEventListener('input', (e) => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity('I\'m expecting an email address');
        email.reportValidity();
    } else {
        email.setCustomValidity('');
    }
});

phoneNumber.addEventListener('input', (e) => {
    if(phoneNumber.validity.patternMismatch) {
        numGuide.textContent='e.g. (123) 456-7890'
    } else {
        numGuide.textContent='';
    }
});

password.addEventListener('input', (e) => {
    if(password.validity.patternMismatch || password.validity.valueMissing) {
        passGuide.classList.remove('hide');
        password.classList.add('error');
    } else {
        passGuide.classList.add('hide');
        password.classList.remove('error')
    }
});
conPassword.addEventListener('input', (e) => {
    if (password.value !== conPassword.value) {
        checkMatch.textContent='Password Doesn\'t Match';
    } else {
        checkMatch.textContent='';
    }
});
form.addEventListener('submit', (e) => {
    if(!phoneNumber.validity.valid || !email.validity.valid || !lastName.validity.valid || !firstName.validity.valid) {
        e.preventDefault();
        showError();
    } else {
        return true;
    }
})      
function showError() {
    if(conPassword.validity.valueMissing) {
        conPassword.setCustomValidity('This field is required');
        conPassword.reportValidity();
    } else {
        conPassword.setCustomValidity('');
    }
    if(password.validity.valueMissing) {
        password.setCustomValidity('This field is required');
        password.reportValidity();
    } else {
        password.setCustomValidity('');
    }
    if(lastName.validity.valueMissing) {
        lastName.setCustomValidity('This field is required');
        lastName.reportValidity();
    } else {
        lastName.setCustomValidity('');
    }
    if(firstName.validity.valueMissing) {
        firstName.setCustomValidity('This field is required');
        firstName.reportValidity();
    } else {
        firstName.setCustomValidity('');
    }
    if(email.validity.typeMismatch) {
        email.setCustomValidity('I\'m expecting an email address');
        email.reportValidity();
    } else {
        email.setCustomValidity('');
    }
}