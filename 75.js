const heading =  document.querySelector('#heading');

console.log(heading.textContent);
console.log(heading.innerText);
//only difference that when we use textContent it will show all the text even if it is hidden(style="display: none")
//  but when we use innerText it will not show the hidden text (style="display: none")

