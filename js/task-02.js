const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elems = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  return itemEl;
});


const ulEl = document.querySelector('#ingredients');
ulEl.append(...elems);

// const elements = [];

// for (let i = 0; i < ingredients.length; i+= 1) {
//   const element = ingredients[i];
//   console.log(element);const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = element;
//   elements.push(itemEl);
// }


// const ulEl = document.querySelector('#ingredients')
// ulEl.append(...elements);
