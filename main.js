const centimetersInput = document.querySelector('#centimeters > input')
const metersInput = document.querySelector('#meters > input')
const feetsInput = document.querySelector('#feet > input')

function roundNumber(number){
    return Math.round(number*100)/100
}

centimetersInput.addEventListener('input', function () {
    const cmLength = parseFloat(centimetersInput.value)
    const mLength = cmLength / 100
    const ftLength = cmLength / 30.48

    metersInput.value = roundNumber(mLength)    
    feetsInput.value = roundNumber(ftLength)
})

metersInput.addEventListener('input', function () {
    const mLength = parseFloat(metersInput.value)
    const cmLength = mLength * 100
    const ftLength = mLength * 3.281

    centimetersInput.value = roundNumber(cmLength)
    feetsInput.value = roundNumber(ftLength)
})

feetsInput.addEventListener('input', function () {
    const ftLength = parseFloat(feetsInput.value)
    const cmLength = ftLength * 30.48
    const mLength = ftLength / 3.281

    centimetersInput.value = roundNumber(cmLength)
    metersInput.value = roundNumber(mLength)
})

// celciusInput.addEventListener('input', function() {
//     const cTemp = parseFloat(celciusInput.value)
//     const fTemp = (cTemp*9/5) + 32
//     const kTemp = cTemp +  273.15

//     fahrenheitInput.value = roundNumber(fTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })
