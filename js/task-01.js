// const categoriesList = document.querySelector("ul#categories");

// const categoriesItems = categoriesList.querySelectorAll("li.item");
// console.log(`Number of categories: ${categoriesItems.length}`);

// for (const item of categoriesItems) {
//     const categoriesName = item.querySelector("h2").textContent;
//     const categoriesElements = item.querySelectorAll("li").length;
//     console.log(`Category: ${categoriesName}`);
//     console.log(`Elements: ${categoriesElements}`);
// }


// const links = document.querySelectorAll('.item');

// console.log('Number of categories: '+ links.length);

// links.forEach(element => {
//     console.log('Category: ' + element.firstElementChild.textContent);  
//     console.log('Elements: ' + element.lastElementChild.children.length);  
// });

const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${items.length}`);

// Ітеруємося по елементах та виводимо інформацію про кожну категорію
items.forEach(item => {
const title = item.querySelector('h2').textContent;
const elements = item.querySelectorAll('li').length;
console.log(`Category: ${title}`);
console.log(`Elements: ${elements}`);
});









