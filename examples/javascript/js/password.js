// const maiuscole = ['A', 'B', 'C', 'D' ...]
const maiuscole = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const minuscole = Array.from('abcdefghijklmnopqrstuvwxyz')
const cifre = Array.from('0123456789')
const simboli = Array.from('£$%&€#@')
const gruppi = [maiuscole, minuscole, cifre, simboli]

function risolvi() {
    let n = getNumberById('n')
    console.log('n = ' + n)
    if (isNaN(n)) {
        error('bad input')
    } else if (n < 8) {
        error('nonsense')
    } else {
        let password = ''
        password += maiuscole[rand(0, maiuscole.length - 1)]
        password += cifre[rand(0, cifre.length - 1)]
        password += simboli[rand(0, simboli.length - 1)]
        while (password.length < n) {
            password += minuscole[rand(0, minuscole.length - 1)]
        }
        console.log(password)
        let a = Array.from(password)
        shuffle(a)
        password = a.toString().replaceAll(',', '')
        console.log(password)
        showResult(password)
    }
}

function shuffle(a) {
    // Fisher-Yates
    let rimanenti = a.length
    while (rimanenti > 1) {
        let casuale = Math.floor(Math.random() * rimanenti)
        rimanenti--
        // [x, y] = [y, x]
        [a[casuale], a[rimanenti]] = [a[rimanenti], a[casuale]]
        // let temp = a[casuale]
        // a[casuale] = a[rimanenti]
        // a[rimanenti] = temp
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function showResult(password) {
    document.getElementById('result').innerHTML = password
}

function error(msg) {
    document.getElementById('result').innerHTML = msg
    // alert(msg)
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}
