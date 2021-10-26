const refs = {
    input: document.querySelector('#controls > input'),
    render: document.querySelector('#controls > [data-action="render"]'),
    boxes: document.querySelector('#boxes'),
    destroy: document.querySelector('#controls > [data-action="destroy"]'),
}

let inputValue = 0;

refs.input.addEventListener('input', handleSubmit);
refs.render.addEventListener('click', createBox);
refs.destroy.addEventListener('click', handlerDestroy);

function handleSubmit(event) {
    const value = event.currentTarget.value;
    return inputValue = value;
};

function createBox() {
    const valueBox = createBoxes(inputValue);
    refs.boxes.insertAdjacentHTML("beforeend", valueBox)
};

function createBoxes(amount) {
    const boxe = [];
    let width = 30;
    let height = 30;
    for (let index = 0; index < amount; index++) {
        width = 30 + index * 10;
        height = 30 + index * 10;
        const element = `<div style="width: ${width}px; height: ${height}px; background-color: rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)});"></div>`;
        boxe.push(element)
    };
    return boxe.join('');
};

function handlerDestroy() {
    refs.boxes.innerHTML = ' ';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};