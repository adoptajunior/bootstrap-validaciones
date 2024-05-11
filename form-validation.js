
const userName = document.getElementById('inputName');
const userMail = document.getElementById('inputEmail');
const userPass1 = document.getElementById('inputPassword1');
const userPass2 = document.getElementById('inputPassword2');

const submitbtn = document.getElementById('submitbtn');

function onSubmit(event) {
    event.preventDefault();

    const nameValue = userName.value;
    const emailValue = userMail.value;
    const pass1Value = userPass1.value;
    const pass2Value = userPass2.value;

    localStorage.setItem('userName', nameValue);
    localStorage.setItem('userMail', emailValue);
    localStorage.setItem('userPass1', pass1Value);
    localStorage.setItem('userPass2', pass2Value);
}

submitbtn.addEventListener('click', onSubmit);