// const maiuscole = ['A', 'B', 'C', 'D' ...]
const maiuscole = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const minuscole = Array.from('abcdefghijklmnopqrstuvwxyz')
const cifre = Array.from('0123456789')
const simboli = Array.from('£$%&€#@')
const gruppi = [maiuscole, minuscole, cifre, simboli]

function genera() {
    let lunghezza = getNumberById('lunghezza')
    console.log('lunghezza = ' + lunghezza)
    if (isNaN(lunghezza)) {
        error('bad input')
    } else if (lunghezza < 8) {
        error('nonsense')
    } else if (lunghezza > 20) {
        error('nonsense')
    } else {
        let password = ''
        let uppercase = document.querySelector('input[name="maiuscole"]:checked').value
        console.log(uppercase)
        let lowercase = document.querySelector('input[name="minuscole"]:checked').value
        let digits = document.querySelector('input[name="cifre"]:checked').value
        let symbols = document.querySelector('input[name="simboli"]:checked').value
        let opzioni = [uppercase, lowercase, digits, symbols]
        let forbidden = 0,
            totalchars = 0
        for (let grp = 0; grp < gruppi.length; grp++) {
            if (opzioni[grp] == 'yes') {
                let chr = Math.floor(Math.random() * gruppi[grp].length)
                password += gruppi[grp][chr]
                totalchars += gruppi[grp].length
            } else if (opzioni[grp] == 'no') {
                forbidden++
            } else {
                totalchars += gruppi[grp].length
            }
        }
        const noduplicati = document.getElementById('duplicati').checked
        if (forbidden == gruppi.length || (totalchars < lunghezza && noduplicati)) {
            error('impossibile')
        } else {
            while (password.length < lunghezza) {
                let grp = Math.floor(Math.random() * gruppi.length)
                if (opzioni[grp] != 'no') {
                    let chr = Math.floor(Math.random() * gruppi[grp].length)
                    if (!password.includes(gruppi[grp][chr]) || !noduplicati) {
                        password += gruppi[grp][chr]
                    }
                }
            }
            console.log(password)
            showResult(password)
        }
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
    document.getElementById('password').innerHTML = password
}

function error(msg) {
    document.getElementById('password').innerHTML = msg
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