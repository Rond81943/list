const myButton = document.querySelector('#btn');
const nameInput = document.querySelector('#input');
const list = document.querySelector('#list');

myButton.disabled = true;

function isEmpty() {
    if (nameInput.value != '') {
        myButton.disabled = false;
    } else {
        myButton.disabled = true;
    }
}

nameInput.addEventListener('keyup', isEmpty);

myButton.addEventListener('click', () => {
    let newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delBtn');

    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem);
    });

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    nameInput.value = '';

    isEmpty();
});
