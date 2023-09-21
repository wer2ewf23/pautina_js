alert('Заранее спасибо за принятие практики')
// нажата и отжата кнопка
let button = document.querySelector('.button')
button.addEventListener('click',function(){
    console.log('нажата и отжата кнопка')
})

// Нажата кнопка
let button2 = document.querySelector('.button2')
button2.addEventListener('mousedown',function(){
    console.log('нажата кнопка')
})

// Отжата кнопка
let button3 = document.querySelector('.button3')
button3.addEventListener('mouseup',function(){
    console.log('нажата кнопка')
})

// наведение курсора
let box = document.querySelector('.box')
box.addEventListener('mouseover', function(){
console.log('Наведение курсора')
box.style.background = 'green'
})
// yhod kursora
box.addEventListener('mouseout', function(){
    console.log('уход курсора')
    box.style.background = 'red'
    })

// Отжата кнопка
let button4 = document.querySelector('.button4')
button4.addEventListener('dblclick',function(){
    button4.style.background = 'orange'
    console.log('Двойное нажатие')
})

// Отжата кнопка
let button5 = document.querySelector('.button5')
button5.addEventListener('contextmenu',function(){
    button5.style.background = 'blue'
    console.log('ПКМ')
})

// mousemove

function rand(max){
    return Math.floor(Math.random() * max);
}

let box2 = document.querySelector('.box2')
box2.addEventListener('mousemove', function(){
    console.log(rand(255))
box2.style.background = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`
})
