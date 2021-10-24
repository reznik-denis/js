const input = document.querySelector('#font-size-control');
input.addEventListener('input', changeFontSize);

const span = document.querySelector('#text');

function changeFontSize(event) {
    span.style.fontSize = `${event.currentTarget.value}px`;
    return
}