/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

// button clicked
convertBtn.addEventListener("click", convert)

// conversion element's value

function convert(){
    let input = inputEl.value
    let meter = input * 3.28084
    let feet = input * 0.3048
    let gallon = input * 0.264172
    let liter = input * 3.78541
    let kilogram = input * 2.20462
    let pound = input * 0.453592
    lengthEl.textContent = `${input} meters = ${meter.toFixed(3)} feet | ${input} feet = ${feet.toFixed(3)} meters`
    volumeEl.textContent = `${input} liters = ${gallon.toFixed(3)} gallons | ${input} gallons = ${liter.toFixed(3)} liters`
    massEl.textContent = `${input} kilos = ${kilogram.toFixed(3)} pounds | ${input} pounds = ${pound.toFixed(3)} kilos`
}
