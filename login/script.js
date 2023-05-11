'use strict';

const email = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
const validation = document.querySelector('.validation');

//////////////////////////////////////////////////////////////////////////

window.addEventListener('keydown', function (e) {
  if (!(e.key === 'Enter')) return;
  const userEmail = email.value;
  const userPassword = password.value;
  const userPasswordRegExp = new RegExp(userPassword);
  let feedback;
  //if any input fields are empty
  if (userEmail === '' || userPassword === '') {
    validation.style.color = 'red';
    feedback = 'Fill in required fields.';
  } else if (
    //check for invalid email
    userEmail.length < 7 ||
    !userEmail.includes('@') ||
    !userEmail.includes('.')
  ) {
    validation.style.color = 'red';
    feedback = 'Enter a valid email address.';
  } else if (
    //check for invalid password
    userPassword.length < 8 ||
    !/[0-9]/.test(userPasswordRegExp) ||
    !/[a-z]/.test(userPasswordRegExp) ||
    !/[A-Z]/.test(userPasswordRegExp)
  ) {
    //message for invalid input
    validation.style.color = 'red';
    feedback =
      'Enter a valid password: atleast 8 characters; a number; a capital letter and a lowercase letter.';
  } else {
    //message for valid input
    validation.style.color = 'green';
    feedback = 'Valid email and password.';
  }
  validation.textContent = feedback;
});
