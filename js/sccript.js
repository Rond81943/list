const buttonElems = document.querySelectorAll('#clear');
const modalElem = document.querySelector('.modal1');
const btnClose = '#esc';
const time = 300;
const clearBtn = document.querySelector('#ok');
const myButton = document.querySelector('#btn');
const searchButton = document.querySelector('#searchBtn');
const nameInput = document.querySelector('#input');
const searchInput = document.querySelector('#searchInput');
const list = document.querySelector('#list');
modalElem.style.cssText = `display: flex; visibility: hidden; opacity: 0; transition: opacity ${time}ms ease-in-out;`;

function isEmpty() {
    myButton.disabled = nameInput.value ? false : true;
}

nameInput.addEventListener('keyup', isEmpty);

function add() {
    if (nameInput.value) {
        let newItem = document.createElement('li');
        newItem.textContent = nameInput.value;
        list.appendChild(newItem);
        newItem.classList.add('item');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&#10006;';
        deleteButton.classList.add('delBtn');
        deleteButton.addEventListener('click', () => {
            list.removeChild(newItem);
        });

        newItem.appendChild(deleteButton);

        nameInput.value = '';
        isEmpty();

        newItem.addEventListener('click', () => {
            newItem.classList.toggle('done');
        });
    }
}

function search() {
    let value = searchInput.value.toLowerCase();
    for (let item of list.children) {
        let itemText = item.textContent.toLowerCase();
        item.style.display = itemText.includes(value) ? 'flex' : 'none';
    }
}

myButton.addEventListener('click', add);
nameInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        add();
    }
});
searchButton.addEventListener('click', search);
searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        search();
    }
});

searchInput.addEventListener('input', search);

const closeModal = (event) => {
    const target = event.target;
    if (target === modalElem || (btnClose && target.closest(btnClose)) || event.code === 'Escape') {
        modalElem.style.opacity = 0;
        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, time);
        window.removeEventListener('keydown', closeModal);
    };
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
};

buttonElems.forEach( (btn) => {
    btn.addEventListener('click', openModal);
});

modalElem.addEventListener('click', closeModal);

document.addEventListener('click', function(event) {
    if (event.target.matches('#ok')) {
        list.innerHTML = '';
        modalElem.style.opacity = 0;
        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, time);
        window.removeEventListener('keydown', closeModal);
    }
});