const container = document.querySelector('.container')
const div = document.createElement('div')
const p = document.createElement('p')
const btn = document.createElement('button')
const body = document.querySelector('body')
let i = 16
let inner = document.querySelectorAll('.inner')

body.insertBefore(btn, container)

btn.innerText = 'Set your canvas here'


// Loop to create the divs
 while (i >0) {
    let div = document.createElement('div')
    div.tabIndex = 0
    div.className = "inner"
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black'
    })
    container.append(div)
    i--
 }

// inner.forEach((div) => {
//     div.addEventListener('click', () =>{ 
//     console.log('boop')
//     })
// })
