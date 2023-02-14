/* 
How to access the window object
*/

// get the parent element
const liste = document.querySelector('#myList');


// different ways to access the child elements

// access the first child element 
console.log(liste.firstElementChild.innerHTML);

// access last child element 
console.log(liste.lastElementChild.innerHTML);

// access sibling elements
console.log(liste.firstElementChild.nextElementSibling);

// access the prior sibling Element 
console.log(liste.lastElementChild.previousElementSibling);

// give all children 
// gives us an interable (not a real array), they do alow loops
const liElements = liste.children;

console.log(liElements);

for (element of liElements) { // iterating through every element of liElements
    console.log(element)// login the individual elemnts to the console
};


//  We can covert an iterable into an array. Then we can use forEach()
const liElementsArray = Array.from(liElements);
console.log(liElementsArray);

liElementsArray.forEach((singleElement) => { // interate through every Elemnent 
    singleElement.style.backgroundColor = 'cyan'; // change the style to red
});

// access and change 
console.log(liElements[1]);

liElements[1].style.color = 'red';
liElements[2].innerHTML = 'new element value';

// access parent element of the "list" 
console.log(liste.parentElement);
liste.parentElement.style.border = '1px solid red'; 

// show amount of child elements 
console.log(liste.childElementCount);
console.log(liste.children.length);


// we create new HTML Elements
const li = document.createElement('li');  // in brackets () we write which HTML should be created 

li.innerHTML = '<b>fourth element </b>';
console.log(li);

liste.appendChild(li); // append (add to the end) a new element to the list

// new elements 
const li2 = document.createElement('li');    
li2.textContent = '<b>fifth element</b>'; // textContent does not interpret tags, only text!!
liste.appendChild(li2); 


// We wont to create a new img tag and add it to our HTML 
let image = document.createElement('img');

// we can add attributes to the img tag for instance 'src'
image.setAttribute('src', 'https://unsplash.it/200');
image.setAttribute('alt' , 'unsplash image');

document.body.appendChild(image); // append image to the body

// delete attributes
image.removeAttribute('alt');
console.log(image.attributes);

const image2 = document.createElement('img');
image2.src = 'https://unsplash.it/250';
image2.alt = 'unsplash image';
image2.style.width = '150px';

document.body.appendChild(image2); // append image to the body


// access select 
const mySelectElement = document.querySelector('#mySelect');
console.log(mySelectElement.innerHTML);

mySelectElement.addEventListener('change', (event) => {
    // value of the selected option
    console.log(event.target.value);

    const selectIndex = mySelectElement.selectedIndex;
    console.log(selectIndex);

    switch (selectIndex) {
        case 0: 
            document.body.style.backgroundColor = 'red';
            break
        case 1: 
            document.body.style.backgroundColor = 'green';
            break
        case 2: 
            document.body.style.backgroundColor = 'blue';
    }
})

// difference between HTML collection and Node list
const lis2 = document.querySelectorAll('li');