'use strict'

let startingMinutes = 15
let startingSeconds = '00'
let intervalId
let timeRunning = false
let inputMinutes = document.querySelector('.inMin')
let inputSeconds = document.querySelector('.inSec')
inputMinutes.value = startingMinutes
inputSeconds.value = startingSeconds
let mins = document.querySelector('.minutes')
let secs = document.querySelector('.seconds')
const startBtn = document.getElementById('start')
const stopBtn = document.querySelector('.pause')
const setttingsBtn = document.querySelector('.settings')
const ring = document.querySelector('.ring')
let time = startingMinutes * 60 + +startingSeconds

function startTimer() {
	timeRunning = true
	intervalId = setInterval(updateCountDown, 1000)
	startBtn.textContent = 'pause'
	startBtn.classList.add('pause')
}

function pauseTimer() {
	if (startBtn.classList.contains('pause')) {
		startBtn.classList.remove('pause')
		startBtn.textContent = 'start'
		clearInterval(intervalId)
		timeRunning = false
	}
}

function updateCountDown() {
	let minutes = Math.floor(time / 60)
	let seconds = time % 60
	seconds = seconds < 10 ? '0' + seconds : seconds
	mins.textContent = minutes
	secs.textContent = seconds
	time--
	if (time < 0) {
		clearInterval(intervalId)
		ring.classList.add('ending')
		setTimeout(() => {
			alert('Time is up')
		}, 1000)
	}
}

setttingsBtn.addEventListener('click', () => {
	inputMinutes.addEventListener('change', () => {
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
