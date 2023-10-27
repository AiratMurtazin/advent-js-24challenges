'use strict'

let startingMinutes = '25'
let startingSeconds = '00'
let intervalId // Variable to store the interval ID
let inputMinutes = document.querySelector('.inMin')
let inputSeconds = document.querySelector('.inSec')
inputMinutes.value = startingMinutes
inputSeconds.value = startingSeconds
let mins = document.querySelector('.minutes')
let secs = document.querySelector('.seconds')
const startBtn = document.getElementById('start')
const stopBtn = document.querySelector('.pause')
const setttingsBtn = document.querySelector('.settings')
const inputs = document.querySelectorAll('input')
const ring = document.querySelector('.ring')
let timeRunning = false
// let startingMinutes = mins.querySelector('input').value
let time = +startingMinutes * 60
//! FUNCTIONS
function startTimer() {
	timeRunning = true
	intervalId = setInterval(updateCountDown, 1000)
	startBtn.innerHTML = `pause`
	startBtn.classList.add('pause')
}

function pauseTimer() {
	if (startBtn.classList.contains('pause')) {
		startBtn.classList.remove('pause')
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
		ring.classList.add('ending')
		setTimeout(() => {
			alert('Time is up')
		}, 1000)
	}
}

//! EVENT LISTENERS

setttingsBtn.addEventListener('click', () => {
	inputMinutes.addEventListener('change', e => {
		const minutes = parseInt(inputMinutes.value)
		if (!isNaN(minutes)) {
			time = minutes * 60 + (parseInt(inputSeconds.value) || 0)
		}
	})

	inputSeconds.addEventListener('change', () => {
		const seconds = parseInt(inputSeconds.value)
		if (!isNaN(seconds)) {
			time = parseInt(inputMinutes.value) * 60 + seconds
		}
	})
})

startBtn.addEventListener('click', () => {
	if (!timeRunning) {
		startTimer()
	} else {
		pauseTimer()
	}
})
