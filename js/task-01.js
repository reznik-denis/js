const categoriesLength = document.querySelector('#categories').children.length;
console.log(`В списке ${categoriesLength} категории.`);

const listItems = document.querySelectorAll(".item");
listItems.forEach((itemList)=> {
    const itemTitle = itemList.querySelector('h2').textContent;
    const elementsItem = itemList.querySelector('ul').children.length;
    console.log(`Категория: ${itemTitle}`);
    console.log(`Количество элементов: ${elementsItem}`);
});

