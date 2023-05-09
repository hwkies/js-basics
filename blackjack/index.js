let player = {
    name: "Harry",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let rand = Math.floor(Math.random() * 13) + 1;
    if (rand > 10) {
        return 10
    } else if (rand === 1) {
        return 11
    } else {
        return rand
    }
}

function startGame() {
    isAlive = true
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Draw new card?"
    } else if (sum === 21) {
        hasBlackjack = true
        message = "You've got blackjack!"
    } else {
        isAlive = false
        message = "You busted!"
    }
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        checkCards()
    }
}