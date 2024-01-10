const container = document.querySelector('.container')
const div = document.createElement('div')
const p = document.createElement('p')
const btn = document.createElement('button')
const body = document.querySelector('body')
let i = 0
let tileCount = 0
let inner = document.querySelectorAll('.inner')

body.insertBefore(btn, container)

btn.innerText = 'Set your canvas here'

// stores the amount to divide by and the amount of squares on the canvas


btn.addEventListener('click', () => {
    input = parseInt(prompt("est")) 
    tilecount = input ** input
    i= tileCount   
    setCanvas()
} )

// gets the number we want to pass to the divs

let getHeight = () => {
 return `${container.offsetHeight / in}px` 
}

let getWidth = () => {
    return `${container.offsetWidth / tileCount}px`  
}
// Loop to create the divs


let setCanvas = () => { while (i >0) {
    console.log(i)
    let div = document.createElement('div')
    div.style.height = "25%"
    div.style.width = getWidth()
    div.tabIndex = 0
    div.className = "inner"
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black'
    })
    container.append(div)
    i--
 }
}

// inner.forEach((div) => {
//     div.addEventListener('click', () =>{ 
//     console.log('boop')
//     })
// })
