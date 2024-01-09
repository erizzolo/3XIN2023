function risolvi() {
    let n = getNumberById('n')
    if (isNaN(n)) {
        error('bad input')
    } else if (n <= 0) {
        error('non adatto')
    } else {
        n = Math.floor(n)
        let divisori = getDivisori(n)
        showResult(divisori)
        shuffle(divisori, divisori.length)
        let quozienti = getQuozienti(divisori, n)
        showTable(divisori, quozienti)
        disegna(divisori, quozienti)
    }
}

function shuffle(a, restanti) {
    console.log(restanti)
    if(restanti > 1) {
        let rnd = Math.floor(Math.random() * restanti)
        restanti = restanti - 1
        let temp = a[rnd]
        a[rnd] = a[restanti]
        a[restanti] = temp
        shuffle(a, restanti)
    }
}

//     0  1  2  3  4  5  6  7  8
// 0 | X| X| X|  |  | X|  |  |  |
// 1 | 9|  |  |  |  |  |  |  |  |
// 2 | 2|  |  |  |  |  |  |  |  |
//    1  10 20 ...............80
//    9  19 29 ...............90
{
   const min = [1, 10, 20, 30, 40, 50, 60, 70, 80]
   const max = [9, 19, 29, 39, 49, 59, 69, 79, 90]
   for (let colonna = 0; colonna < 9; colonna++) {
       
       a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
       shuffle(a, a.length)
       a = [5, 9, 2, 1, 4, 7, 6, 8, 3]
    }
    
    p = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    shuffle(p, p.length)
    p = [5, 0, 2, 1, 4, 7, 6, 8, 3]

}
function disegna(dx, dy) {
    const canvas = document.getElementById('tela')
    const ctx = canvas.getContext('2d')
    const scale = Math.min(canvas.width, canvas.height) / dy[0]
    ctx.moveTo(scale * dx[0], scale *dy[0])
    ctx.beginPath()
    for (let index = 0; index < dx.length; index++) {
        x = scale * dx[index]
        y = scale * dy[index]
        ctx.lineTo(x, y)
    }
    ctx.stroke()
}


function getDivisori(n) {
    let result = []
    for (let d = 1; d <= n; d++) {
        if( n % d == 0) {
            // result.push(d)
            result[result.length] = d
        }
    }
    return result
}

function getQuozienti(divisori, n) {
    let result = []
    for (let i = 0; i < divisori.length; i++) {
            // result.push(n / divisori[i])
            result[result.length] = n / divisori[i]
    }
    return result
}

function showTable(d, q) {
    let html = ''
    html += '<tbody>'
    html += makeRow(d)
    html += makeRow(q)
    html += '</tbody>'
    document.getElementById('tabella').innerHTML = html
}

function makeRow(a) {
    let html = ''
    html += '<tr>'
    for (let i = 0; i < a.length; i++) {
        html += '<td>'
        html += a[i]
        html += '</td>'
    }
    html += '</tr>'
    return html
}
function showResult(divisori) {
    document.getElementById('result').innerHTML = 'I divisori di ' + divisori[divisori.length - 1] + ' sono ' + divisori.length + ': ' + divisori
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
