let homePoints = document.getElementById("home-score-el")
let guestPoints = document.getElementById("guest-score-el")

let homeScoreEl = 0 
let guestScoreEl = 0

// Home Score Counter

function onePointHome() {
    homeScoreEl += 1 
    homePoints.textContent = homeScoreEl
}

function twoPointsHome() {
    homeScoreEl += 2
    homePoints.textContent = homeScoreEl
}

function threePointsHome() {
    homeScoreEl += 3 
    homePoints.textContent = homeScoreEl
}

// Guest Score Counter

function onePointGuest() {
    guestScoreEl += 1 
    guestPoints.textContent = guestScoreEl
}

function twoPointsGuest() {
    guestScoreEl += 2
    guestPoints.textContent = guestScoreEl
}

function threePointsGuest() {
    guestScoreEl += 3
    guestPoints.textContent = guestScoreEl
}