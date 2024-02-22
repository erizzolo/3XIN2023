"use strict"

let started = false
let startTime = null

// activate event when DOM loaded
window.addEventListener('DOMContentLoaded', checkStored)

function start() {
    if (!started) {
        // reset conditions
        started = true
        startTime = null
        setClass('semaforo', 'rosso')
        document.getElementById('save').disabled = true // disable save button
        // generate random delay in seconds
        let delay = Math.floor(Math.random() * 10) + 1
        // execute prepare() after delay s
        setTimeout(prepare, delay * 1000)
    }
}

function prepare() {
    if (startTime == null) {
        startTime = performance.now()   // save current time
        setClass('semaforo', 'verde')   // green light !!!
    }
}

function test() {
    if (started && startTime != null) {
        let delta = performance.now() - startTime   // compute time interval
        setValue('reaction', delta, 3)  // show it
        started = false // avoid change
        document.getElementById('save').disabled = false // enable save button
    }
}

function save() {
    let value = document.getElementById('reaction').innerHTML
    localStorage.setItem('reaction', value)
    checkStored()
}

function checkStored() {
    let value = localStorage.getItem('reaction')
    let stored = document.getElementById('stored')
    if (stored != null && value != null) {
        stored.innerHTML = value
    }
}

function setValue(id, value, digits) {
    let e = document.getElementById(id)
    if (e != null) {
        e.innerHTML = value.toFixed(digits)
    }
}

function setClass(id, classe) {
    let e = document.getElementById(id)
    if (e != null) {
        e.className = classe
    }
}

