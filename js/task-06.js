const input = document.querySelector('#validation-input');
input.addEventListener('blur', validator);

function validator(event) {
    if (event.currentTarget.value.length == input.dataset.length) {
        input.classList.contains('invalid') ? input.classList.replace('invalid', 'valid') : input.classList.add('valid');
    } else {
        input.classList.contains('valid') ? input.classList.replace('valid', 'invalid') : input.classList.add('invalid');
    }
    return
}