const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')


function nameGuest(event) {
    output.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        output.textContent = 'незнакомец';
    }
    return 
}

input.addEventListener('input', nameGuest);


// const refs = {
//     input: document.querySelector('#name-input'),
//     span: document.querySelector('#name-output'),
// }

// function onInputChange(event) {
//     event.currentTarget.value !== `` ?
//     refs.span.textContent = event.currentTarget.value :
//     refs.span.textContent = `незнакомец`;
// }

// refs.input.addEventListener('input', onInputChange)