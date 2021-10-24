const counterValue = document.querySelector('#value');
let counter = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement)

function increment() {
    counter += 1
    return counterValue.textContent = counter;
}

function decrement() {
    counter -= 1
    return counterValue.textContent = counter;
}