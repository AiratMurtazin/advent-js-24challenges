'use strict'

const startingMinutes = 15
let time = startingMinutes * 60
let intervalId // Variable to store the interval ID
let mins = document.querySelector('.minutes')
let secs = document.querySelector('.seconds')
const startBtn = document.getElementById('start')
const stopBtn = document.querySelector('.stop')
let timeRunning = false

function startTimer() {
	timeRunning = true
	intervalId = setInterval(updateCountDown, 1000)
	startBtn.innerHTML = `stop`
	startBtn.classList.add('stop')
}
function stopTimer() {
	if (startBtn.classList.contains('stop')) {
		startBtn.classList.remove('stop')
		startBtn.innerHTML = `start`
		clearInterval(intervalId)
		timeRunning = false
	}
}

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

startBtn.addEventListener('click', () => {
	if (!timeRunning) {
		startTimer()
	} else {
		stopTimer()
	}
})
