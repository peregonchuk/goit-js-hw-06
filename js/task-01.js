const categoriesNumber = document.querySelector('#categories').children.length;
console.log('Number of categories:', categoriesNumber);

const listItems = document.querySelectorAll('.item');

listItems.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelector('ul').children.length}`);
});