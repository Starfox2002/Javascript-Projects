document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter')
    addNote();

})
let num = 1;
function addNote() {
    let input = document.getElementById('input');
    let noteList = document.getElementById('noteList');
    let childnodes = noteList.childNodes;

    let note = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    let head = document.createTextNode('Note ' + num);
    let detail = document.createTextNode(input.value);
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('View Detail'))

    h3.appendChild(head);
    p.appendChild(detail);
    note.appendChild(h3)
    note.appendChild(p)
    note.appendChild(button)
    noteList.appendChild(note);
    num++;

    if (childnodes.length == 1) {
        note.style.width = '90%';
    } else {
        for (let i=0; i < childnodes.length; i++) {
            childnodes[i].style.width = '35%'
            childnodes[i].style.display = 'inline-block';
        }
    }
        
}