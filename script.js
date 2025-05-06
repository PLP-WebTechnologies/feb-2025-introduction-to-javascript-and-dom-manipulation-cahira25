// Changes the text content of a paragraph when the button is clicked
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.textContent = 'The text has been dynamically changed!';
});

// Modifies the CSS styles of a paragraph when the button is clicked
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    const styleElement = document.getElementById('styleText');
    styleElement.style.color = 'blue';
    styleElement.style.fontSize = '20px';
    styleElement.style.fontWeight = 'bold';
});

// Adds a new element when the 'Add Element' button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
    const container = document.getElementById('newElementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added element!';
    container.appendChild(newElement);
});

// Removes the last added element when the 'Remove Element' button is clicked
document.getElementById('removeElementBtn').addEventListener('click', function() {
    const container = document.getElementById('newElementContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});
