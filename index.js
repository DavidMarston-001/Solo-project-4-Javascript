let numberOfUnits = document.getElementById("unity");
let resultOfLength = document.getElementById("length");
let resultOfVolume = document.getElementById("volume");
let resultOfMass = document.getElementById("mass");

function activate() {
    convertLength()
    convertVolume()
    convertMass()
}

function convertLength() {
    let feets = numberOfUnits.value * 3.281
    let meters = numberOfUnits.value / 3.281
    resultOfLength.textContent = `${numberOfUnits.value} meters = ${feets.toFixed(3)} feet | ${numberOfUnits.value} feet = ${meters.toFixed(3)} meters`
}

function convertVolume() {
    let liters = numberOfUnits.value * 0.264
    let gallons = numberOfUnits.value / 0.264
    resultOfVolume.textContent = `${numberOfUnits.value} liters = ${liters.toFixed(3)} gallons | ${numberOfUnits.value} gallons = ${gallons.toFixed(3)} liters`
}

function convertMass() {
    let kilos = numberOfUnits.value * 2.204
    let pounds = numberOfUnits.value / 2.204
    resultOfMass.textContent = `${numberOfUnits.value} kilos = ${kilos.toFixed(3)} pounds | ${numberOfUnits.value} pounds = ${pounds.toFixed(3)} kilos`
}