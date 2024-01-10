const container = document.querySelector('.container')
const div = document.createElement('div')
const p = document.createElement('p')
const btn = document.createElement('button')
const body = document.querySelector('body')
let i = 16
let input = 4
let tileCount = 0
let inner = document.querySelectorAll('.inner')


body.insertBefore(btn, container)

btn.innerText = 'Set your canvas here'

// stores the amount to divide by and the amount of squares on the canvas


btn.addEventListener('click', () => {
    input = parseInt(prompt("Please set how many squares wide and tall you want the canvas")) 
    i = input * input
    tileCount = input * input
    if(!Number(i)) {
        alert("Please enter a number!")
    } else if (i > 100) {
    alert("Please enter a number equal or greater than 100")
    } else {    removeAllChildNodes(container)
    setCanvas()
    
}

} )

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// btn.addEventListener('click', () => {
//     console.log(i)

//     // setCanvas()
// })

// gets the number we want to pass to the divs

let getHeight = () => {
 return `${container.offsetHeight / input}px` 
}

let getWidth = () => {
    return `${container.offsetWidth / input}px`  
}
// Loop to create the divs


let setCanvas = () => { while (i >0) {
    console.log(i)
    let div = document.createElement('div')
    div.style.height = getHeight()
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


document.addEventListener('DOMContentLoaded', () => {
    setCanvas()
})
