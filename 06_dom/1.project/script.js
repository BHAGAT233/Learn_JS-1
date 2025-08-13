let boxs = document.querySelectorAll('.box')
let body = document.querySelector('body')


boxs.forEach(function (box) {
    console.log(box);
    box.addEventListener('click', function (e) {
        console.log(e.target);

        if (e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }

    })
})