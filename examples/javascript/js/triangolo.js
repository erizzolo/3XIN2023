function verifica() {
    let a = getNumberById('a')
    let b = getNumberById('b')
    let c = getNumberById('c')
    show('triangolo', '')
    show('rettangolo', '')
    // console.log(triangle) ERRORE
    console.log('a = ' + a + ' b = ' + b + ' c = ' + c)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        show('triangolo', 'Valori non numerici')
    } else if (a <= 0 || b <= 0 || c <= 0) {
        show('triangolo', 'Valori non positivi')
    } else {
        // verifica che a è il maggiore
        if (a < b) {
            let t = a; a = b; b = t
            // scambio(a, b) NO!!!
        }
        if (a < c) {
            let t = a; a = c; c = t
            // scambio(a, c) NO !!!
        }
        console.log('a = ' + a + ' b = ' + b + ' c = ' + c)
        // controlli
        let triangle = a < b + c
        if (triangle) {
            show('triangolo', 'Le misure sono possibili lati di un triangolo')
            let rectangle = (a * a == b * b + c * c)
            if (rectangle) {
                show('rettangolo', 'Il triangolo è rettangolo')
            } else {
                show('rettangolo', 'Il triangolo NON è rettangolo')
            }
            console.log(rectangle)
        } else {
            show('triangolo', 'Le misure NON sono possibili lati di un triangolo')
        }
    }
}

function show(id, what) {
    // document.getElementById(id).innerHTML = what
    setHTML(document.getElementById(id), what)
}

function setHTML(element, html) {
    if (element != null) {
        element.innerHTML = html
    }
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}

// funzione inutile: i valori sono passati come copia !!!
// lo scambio delle copie non modifica gli originali !!!
function scambio(x, y) {
    let t = x; x = y; y = t
}