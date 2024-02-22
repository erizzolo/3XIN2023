"use strict"

const DIGITS = 2    // fractional digits used in output

function showInput() {
    let s = document.getElementById('speed')
    if (s != null) {
        let speed = s.valueAsNumber
        let v = document.getElementById('velocity')
        if (v != null) {
            v.innerHTML = speed
            setValue('optimal', spazio(speed, 0.8), DIGITS)
            setValue('wet', spazio(speed, 0.4), DIGITS)
            setValue('ice', spazio(speed, 0.05), DIGITS)
        }
    }
}

function spazio(kmorari, attrito) {
    const acc = 9.8 // m/s^2 accelerazione di gravità
    const toMetriAlSecondo = 1000 / 3600    // conversione da km/h in m/s
    let result = (kmorari * toMetriAlSecondo) ** 2 / (2 * acc * attrito)
    // console.log(result)
    return result
}

function setValue(id, value, digits) {
    let e = document.getElementById(id)
    if (e != null) {
        e.innerHTML = value.toFixed(digits)
    }
}

