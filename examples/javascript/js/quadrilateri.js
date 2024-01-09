function verifica() {
    let a = getNumberById('a')
    let b = getNumberById('b')
    let c = getNumberById('c')
    let d = getNumberById('d')
    show('quadrilatero', '')
    show('tipo', '')
    let t = document.querySelector('input[name="tipo"]:checked')
    if (t != null) {
        t.checked = false
    }
    console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d)
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        show('quadrilatero', 'Valori non numerici')
    } else if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        show('quadrilatero', 'Valori non positivi')
    } else {
        console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d)
        // controlli
        let quadri = (a + b + c + d == 360)
        if (quadri) {
            show('quadrilatero', 'Le misure sono possibili angoli di un quadrilatero')
            let rectangle = false, tipo = "sconosciuto"
            if (a == b && a == c && a == d) {
                tipo = "rettangolo"
            } else if (a == c && b == d) {
                tipo = "rombo"
            } else if ((a == b && c == d) || (a == d && b == c)) {
                tipo = "trapezio isoscele"
            } else if((a == 90 && b == 90) || (b == 90 && c == 90) || (c == 90 && d == 90) || (a == 90 && d == 90)) {
                tipo = "trapezio rettangolo"
            }
            document.querySelector('input[value="' + tipo + '"]').checked = true
            if (rectangle) {
                tipo += ' e tipo'
            }
            show('tipo', 'Il quadrilatero è ' + tipo)
        } else {
            show('quadrilatero', 'Le misure NON sono possibili angoli di un quadrilatero')
        }
    }
}

function show(id, what) {
    // document.getElementById(id).innerHTML = what
    setHTML(document.getElementById(id), what)
}

function setHTML(element, html) {
    element.innerHTML = html
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}

function testRettangolo(a, b, c) {
    return a == 90 || b == 90 || c == 90
}