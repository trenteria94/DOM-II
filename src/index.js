/* eslint-disable no-unused-vars */
import './less/index.less'

// Your code goes here!

//Event 1 Load
window.onload = function (evt) {
    console.log (`event ${evt.type} worked!`)
    const heading = document.querySelector('h1')
    console.log(heading)
    heading.style.fontStyle = 'oblique'


//Event 2 Copy
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })
})

//Event 3 Click 
document.body.addEventListener('click', evt =>{
    evt.target.classList.toggle('mirror')

})

//Event 4 Dbl Click 
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

//Event 5 Keydown
window.addEventListener('keydown', evt => {
    if (evt.key === '6') {
        document.body.innerHTML = '<h1>YOU DESTROYED THE DOM</h1>'
    }
})

//Event 6 MouseMove
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
   // console.log(`mouse is at ${clientX}, ${clientY}`)
})

//Event 7 MouseEnter
const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
    }
//Event 8 MouseLeave
for (let destination of destinations) {
    destination.addEventListener('mouseleave', evt => {
       setTimeout(() =>
        destination.style.fontWeight = 'normal'
        , 150)
    })
}
//Event 9 Mouse Over
const textContent = document.querySelector('.nav')
textContent.addEventListener('mouseover', evt => {
    evt.target.style.fontFamily = 'emoji'
})

//Event 10 PreventDefault

}

