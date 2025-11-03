function addItem () {
    let table = document.getElementById('expseLst');
    let name = document.getElementById('name').value
    let date = document.getElementById('date').value
    let amount = document.getElementById('amount').value;

    let fill = document.getElementById('noExpse');
    let td = document.getElementsByTagName('td');
    if (td.length == 1) {
        fill.style.display = 'none';
    }

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let but = document.createElement('button');
    but.textContent = 'X';
    but.id = 'erase';
    but.onclick = function (e) {
        let but = e.target;
        but.parentNode.parentNode.remove()

        if (td.length < 2) {
            fill.style.display = 'table-row';
        }
    };

    td1.appendChild(document.createTextNode(name));
    td2.appendChild(document.createTextNode(date));
    td3.appendChild(document.createTextNode(`${amount}`));
    td4.appendChild(but);

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4)
    console.log(document.getElementsByTagName('td'));
}