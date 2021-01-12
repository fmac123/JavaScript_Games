const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

function flipCard () {
    //if lockBoard is true then don't allow player to flip more cards
    if (lockBoard) return
    if (this === firstCard) return


    this.classList.toggle('flip')

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true
        firstCard = this
    }
    else {
        //second click
        hasFlippedCard = false
        secondCard = this

        checkForMatch()
    }
}

function checkForMatch () {
    //cards match, disable them
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards()  
    }
    //not a match, flip cards back over
    else {
        unflipCards()
    }
}

function disableCards() {
    //cards match so remove the event listener so you can't click cards again
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

function unflipCards() {
    //locks the board until card has been flipped over
    lockBoard = true
    setTimeout( () => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        lockBoard = false

        resetBoard()
    }, 1500)
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false,false]
    [firstCard, secondCard] = [null,null] 
}

//shuffles the card order each time
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos
    })
})()

cards.forEach(card => card.addEventListener('click', flipCard))