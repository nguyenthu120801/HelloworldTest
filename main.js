const form = document.getElementById('form');
const username = document.getElementById('name');
const password = document.getElementById('password');
const cfpassword = document.getElementById('cfpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernamevalue = username.value.trim();
    const passwordvalue = password.value.trim();
    const cfpasswordvalue = cfpassword.value.trim();

    if (usernamevalue === '') {
        setErrorFor(username, 'Username is required');
    } else {
        setSuccessFor(username);
    }
    if (passwordvalue === '') {
        setErrorFor(password, 'password is required');
    } else {
        setSuccessFor(password);
    }
    if (cfpasswordvalue === '') {
        setErrorFor(cfpassword, 'confirm password is required');
    } else if (cfpasswordvalue !== passwordvalue) {
        setErrorFor(cfpassword, 'Password and confirm password do not match');
    }
    else {
        setSuccessFor(cfpassword);
        let p = document.querySelector('p');
        p.style.display = 'block';
        p.innerHTML = 'you have registered successfully'
    }
}

function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}
