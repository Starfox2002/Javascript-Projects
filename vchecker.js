document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        check();
    }
})
function check() {
    let input = document.getElementById('word').value;
    input.toLowerCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let num = 0;
    let i=0;
    while (i < input.length) {
        if (vowels.indexOf(input[i]) !== -1) {
            num++;
        }
        i++;
    }
    alert('The number of vowels is ' + num);
}