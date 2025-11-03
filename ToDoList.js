document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter'){
    addItem();
    }
})

function addItem () {
    let input = document.getElementById('item');
    let list = document.getElementById('list');
    
    if (input.value !== '') {
        let newItem = document.createElement('li');
        let item = document.createTextNode(input.value);

        let button = document.createElement('input');
        button.type = 'button';
        button.value = 'X';
        button.onclick = function (e) {
            let item = e.target.parentNode;
            item.remove();
    }
    newItem.appendChild(item);
    newItem.appendChild(button);
    list.appendChild(newItem);
    }
    input.value = ''
}

function clearList () {
    let list = document.getElementById('list');
    list.textContent = '';
}