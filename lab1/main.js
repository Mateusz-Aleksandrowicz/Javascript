const dodajPole = document.querySelector('#pole')
const usunPole = document.querySelector('#usun')
const przeliczBtn = document.querySelector('#przelicz')
const pojemnik = document.querySelector('#inputy')
const wynik = document.querySelector('#wynik')
const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')
const number3 = document.querySelector('#number3')
const number4 = document.querySelector('#number4')

function Suma(){
    const result = parseInt(number1.value) + parseInt(number2.value) + parseInt(number3.value) + parseInt(number4.value)
    return result
}

function Srednia(){
    const result = (parseInt(number1.value) + parseInt(number2.value) + parseInt(number3.value) + parseInt(number4.value))/4
    return parseFloat(result)
}

function Min(){
    const result = Math.min(
        parseInt(number1.value),parseInt(number2.value),parseInt(number3.value),parseInt(number4.value)
        )
    return result
}

function Max(){
    const result = Math.max(
        parseInt(number1.value),parseInt(number2.value),parseInt(number3.value),parseInt(number4.value)
        )
    return result
}

dodajPole.addEventListener('click', () => {
    pojemnik.innerHTML += '<input type="text" id="number5"> <button id="usun">Usun pole</button></input><br><br>'
})

przeliczBtn.addEventListener('click', () => {
    wynik.innerHTML = `Suma: ${Suma()}<br><br>`
    wynik.innerHTML += `Srednia: ${Srednia()}<br><br>`
    wynik.innerHTML += `Min: ${Min()}<br><br>`
    wynik.innerHTML += `Max: ${Max()}<br><br>`
})


