const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
const listElements = ingredients.map(ingredient => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    return item;
});
 
list.append(...listElements)
