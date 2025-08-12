let btn = document.getElementById('myBtn')
let a = document.querySelector('body')
// console.log(btn);

let flag = 0;

btn.addEventListener('click', function () {
    if (flag == 0) {
        a.style.backgroundColor = 'yellow'
        console.log('Cliocked');
        flag = 1;
    }
    else {
        a.style.backgroundColor = 'transparent'
        console.log('Again clieckedf');
        flag = 0;
    }
    
})

let typed = new Typed('.text', {
    strings: ['coder', 'Archery playear', 'web developer'],
    typeSpeed: 150,
    backSpeed:150,
    loop: true
})


