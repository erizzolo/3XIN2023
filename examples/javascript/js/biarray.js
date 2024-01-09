const MODULO = 20

function genera() {
    let dim = getNumberById('elementi')
    if (isNaN(dim)) {
        error('bad input')
    } else if (dim <= 0) {
        error('valore non positivo')
    } else {
        let dx = [], dy = []
        dx.length = dy.length = dim
        for (let index = 0; index < dim; index++) {
            dx[index] = Math.random() * 2 * MODULO - MODULO
            dy[index] = Math.random() * 2 * MODULO - MODULO
        }
        console.log(dx)
        console.log(dy)
        mostra(dx, dy)
    }
}

function mostra(dx, dy) {
    let html = ''
    for (let index = 0; index < dx.length; index++) {
        html += htmlRow(index + 1, dx[index], dy[index])
    }
    let body = document.querySelector('tbody')
    body.innerHTML = html
}

function htmlRow(i, x, y) {
    return '<tr><td>' + i + '</td><td>' + x + '</td><td>' + y + '</td></tr>'
}


function error(msg) {
    document.getElementById('result').innerHTML = msg
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}
