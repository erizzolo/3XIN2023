function risolvi() {
    let n = getNumberById('n')
    console.log('n = ' + n)
    if (isNaN(n)) {
        error('bad input')
    } else if (n < 2) {
        error('nonsense')
    } else {
        let primi = []
        primi.length = n + 1
        // primi.fill(1)
        for (let index = 2; index < primi.length; index++) {
            primi[index] = 1    // 1 = primo
        }
        // crivello
        for (let p = 2; p < primi.length / 2; p++) {
            if(primi[p] == 1) {
                // p è primo
                for (let m = p * p; m <primi.length; m += p) {
                    primi[m] = 0
                }
                primi[p] = p
            }
        }
        console.log(primi)
        showResult(primi)
    }
}

function showResult(primi) {
    let html = ''
    html += '<tbody>'
    html += '<tr>'
    for (let p = 2; p < primi.length; p++) {
        if(primi[p] != 0) {
            html += '<td>'
            html += p
            html += '</td>'
        }
    }
    html += '</tr>'
    html += '</tbody>'
    document.getElementById('primi').innerHTML = html
    document.getElementById('result').innerHTML = primi
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
