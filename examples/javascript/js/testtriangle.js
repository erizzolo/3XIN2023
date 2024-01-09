const possible = 'I tre valori possono essere le misure dei lati di un triangolo.'
const impossible = 'I tre valori NON possono essere le misure dei lati di un triangolo.'
const rettangolo = 'Il triangolo con queste misure è rettangolo.'
const scaleno = 'Il triangolo con queste misure NON è rettangolo.'
const nonsense = 'Verifica non effettuabile.'

function verifica() {
    showResult('errore', '') // clear error message
    showResult('possibile', '') // clear output
    showResult('rettangolo', '') // clear output
    let a = getNumberById('a')
    let b = getNumberById('b')
    let c = getNumberById('c')
    console.log('a = ' + a + ' b = ' + b + ' c = ' + c)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult('errore', 'Le misure devono essere numeri validi')
    } else if (a <= 0 || b <= 0 || c <= 0) {
        showResult('errore', 'Le misure devono essere positive')
    } else {
        // parte opzionale
        if (b > a) {
            let t = a
            a = b
            b = t
        }
        if (c > a) {
            let t = a
            a = c
            c = t
        }
        let possibile, tipo
            // first version
        if (a < b + c) {
            possibile = possible
            if (a * a == b * b + c * c) {
                tipo = rettangolo
            } else {
                tipo = scaleno
            }
        } else {
            possibile = impossible
            tipo = nonsense
        }
        showResult('possibile', possibile)
        showResult('rettangolo', tipo)
    }
}


function showResult(id, message) {
    document.getElementById(id).innerHTML = message
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}