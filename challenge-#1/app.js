'use strict'

const startingMinutes = 15
let time = startingMinutes * 60
let intervalId // Variable to store the interval ID
let mins = document.querySelector('.minutes')
let secs = document.querySelector('.seconds')
const startBtn = document.querySelector('.start')

startBtn.addEventListener('click', () => {
	clearInterval(intervalId)

	intervalId = setInterval(updateCountDown, 1000)
})

function updateCountDown() {
	let minutes = Math.floor(time / 60)
	let seconds = time % 60

	seconds = seconds < 10 ? '0' + seconds : seconds

	mins.innerHTML = `<input type="text" value="${minutes}" />`
	secs.innerHTML = `<input type="text" value="${seconds}" />`
	time--

	if (time < 0) {
		clearInterval(intervalId)
	}
}
