const input = document.querySelector('#controls > input');
let inputValue = 0;

input.addEventListener('input', handleSubmit);

const render = document.querySelector('#controls > [data-action="render"]')
render.addEventListener('click', createBox)

const boxes = document.querySelector('#boxes');

function handleSubmit(event) {
    const value = event.currentTarget.value;
    return inputValue = value;
};

function createBox() {
    const valueBox = createBoxes(inputValue);
    boxes.insertAdjacentHTML("beforeend", valueBox)
}

function createBoxes(amount) {
    const boxe = [];
    let width = 30;
    let height = 30;
    for (let index = 0; index < amount; index++) {
        width = 30 + index * 10;
        height = 30 + index * 10;
        const element = `<div style="width: ${width}px; height: ${height}px; background-color: red;"></div>`;
        boxe.push(element)
    };
    return boxe.join('');
}