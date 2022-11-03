const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const positionItems = ingredients.map(item => {
const positionEl = document.createElement('h1');
positionEl.classList.add('item');
positionEl.textContent = item
return positionEl;
});

ingredientsList.append(...positionItems);
