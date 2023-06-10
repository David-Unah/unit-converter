const body = document.getElementById("main-number")
const lenghtP = document.getElementById("lenght--ph")
const literP = document.getElementById("liter--ph")
const kilosP = document.getElementById("kilo--ph")







body.addEventListener('input', function() {
    let unit = this.value

//meter to feet = multiply the meter by the 3.28084
const convertToFeet = unit * 3.28084
const meterToFeet = convertToFeet.toFixed(3)

//feet to meter = divide the feet by 0.304
const convertToMeter = unit / 3.28084
const feetToMeter = convertToMeter.toFixed(3)

lenghtP.textContent = `${unit} meters =  ${meterToFeet} feet  | ${unit} feet =  ${feetToMeter} meters`

//liter to gallon = divide the liter by 3.785

const convertToGallon = unit / 3.785
const literToGallon = convertToGallon.toFixed(3)

//gallon to liter = mulitply the gallon by liter

const convertToliter = unit * 3.785
const gallonToLiter = convertToliter.toFixed(3)

literP.textContent = `${unit} liters =  ${literToGallon} gallons  | ${unit} gallons =  ${gallonToLiter} liters`

// kilos to pounds = multiply the kilo by 2.205

const convertToPounds = unit * 2.205
const kilosToPounds = convertToPounds.toFixed(3)

const convertToKilos = unit / 2.205
const poundsToKilos = convertToKilos.toFixed(3)

kilosP.textContent = `${unit} kilos = ${kilosToPounds} pounds | ${unit} pounds = ${poundsToKilos} kilos`


})
    