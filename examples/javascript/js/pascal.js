function risolvi() {
    let n = getNumberById('n')
    console.log('n = ' + n)
    if (isNaN(n)) {
        error('bad input')
    } else if (n < 1) {
        error('nonsense')
    } else {
        let pascal = [] // pascal[i] = riga i-esima del triangolo
        // pascal[i] = array con i+1 elementi
        for (let riga = 0; riga < n; riga++) {
            pascal[riga] = []
            pascal[riga][0] = 1
            pascal[riga][riga] = 1
            for (let colonna = 1; colonna < riga; colonna++) {
                console.log('riga = ' + riga + ', colonna = ' + colonna)
                console.log(pascal)
                pascal[riga][colonna] = pascal[riga - 1][colonna] + pascal[riga - 1][colonna - 1]
            }
        }
        {
            let pascal = [] // pascal[i] = riga i-esima del triangolo
            // pascal[i] = array con i+1 elementi
            for (let riga = 0; riga < n; riga++) {
                pascal[riga] = []
                pascal[riga][0] = 1
                pascal[riga][riga] = 1
                for (let colonna = 1; colonna < riga; colonna++) {
                    pascal[riga][colonna] = pascal[riga - 1][colonna] + pascal[riga - 1][colonna - 1]
                }
            }
        }
        console.log(pascal)
        showResult(pascal)
    }
}

function showResult(pascal) {
    let html = ''
    html += '<tbody>'
    for (let riga = 0; riga < pascal.length; riga++) {
        html += '<tr>'
        for (let colonna = 0; colonna < pascal[riga].length; colonna++) {
            html += '<td>'
            html += pascal[riga][colonna]
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</tbody>'
    document.getElementById('pascal').innerHTML = html
    document.getElementById('result').innerHTML = pascal
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
