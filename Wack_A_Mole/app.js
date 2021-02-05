const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    //assigns the id of the random pos to hit pos for us to use later
    hitPos = randomPosition.id
}

//checks if user clicked the mole
square.forEach(id=>{
    id.addEventListener('mouseup', ()=>{
        if (id.id === hitPos) {
            result++
            score.textContent = result
        }
    })
})

//moves mole every second
function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}
moveMole()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0){
        clearInterval(timerId)
        alert(`Game Over! Your total score is ${result}`)
    }

}

let timerId = setInterval(countDown, 1000)


