

let button = document.querySelector('#button');

button.addEventListener('click', function(event) { {
    event.preventDefault();
    let selectedElement = document.querySelector('#select');
    let selectedIndex = selectedElement.selectedIndex;
    selectedElement.options.remove(selectedIndex);

}
});
