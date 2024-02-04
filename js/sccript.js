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

function add() {
    let newItem = document.createElement('li');
    newItem.textContent = nameInput.value;
    list.appendChild(newItem);
    newItem.classList.add('item');

    const deleteButton = document.createElement('button');
    newItem.append(deleteButton);
    deleteButton.classList.add('delBtn');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem);
    });

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    nameInput.value = '';

    isEmpty();
    
    newItem.addEventListener('click', () => {
        newItem.classList.toggle('done');
        
    });
};

nameInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        add();
    }
});

myButton.addEventListener('click', add);

