//how to get dimensions of an element

const header = document.querySelector(".header");
const info = header.getBoundingClientRect();
console.log(info);
console.log(info.height);
console.log(info.width);