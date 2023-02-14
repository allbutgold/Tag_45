const list = document.querySelector('#myList');
const firstElementChild = document.querySelector('#btn1')
const lastElementChild = document.querySelector('#btn2')
const nextElementSibling = document.querySelector('#btn3')
const previousElementSibling = document.querySelector('#btn4')
const output = document.querySelector('#output');
console.log(list.lastElementChild.nextElementSibling);

firstElementChild.addEventListener('click', (event) => {
    output.innerHTML = list.firstElementChild.innerHTML;
})

lastElementChild.addEventListener('click', (event) => {
    output.innerHTML = list.lastElementChild.innerHTML;
})

nextElementSibling.addEventListener('click', (event) => {
    output.innerHTML = list.lastElementChild.previousElementSibling.innerHTML;
})

previousElementSibling.addEventListener('click', (event) => {
    output.innerHTML = list.firstElementChild.nextElementSibling.innerHTML;
})