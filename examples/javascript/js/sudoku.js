window.addEventListener('DOMContentLoaded', risolvi)

// risolvi()
function risolvi() {

    const GAMES = '..............3.85..1.2.......5.7.....4...1...9.......5......73..2.1........4...9'
    let game = Array.from(GAMES)
    console.log(game)
    document.getElementById('sudoku').innerHTML = getTable(game)
    document.getElementById('sudoku').addEventListener('input', check) 
    
}

function check(evento) {
    // console.log(evento.target)
    const td = evento.target
    const colonna = td.cellIndex
    const tr = td.parentElement
    const riga = tr.rowIndex
    console.log(riga + '-' + colonna)
}

function getTable(g) {
    let html = ''
    html += '<tbody>'
    for (let cell = 0; cell < g.length; cell++) {
        if(cell % 9 == 0) {
            html += '<tr>'
        }
        if(g[cell] != '.') {
            html += '<td class="fissa">'
            html += g[cell]
        } else {
            html += '<td contenteditable="true">'
        }
        html += '</td>'
        if(cell % 9 == 8) {
            html += '</tr>'
        }
    }
    html += '</tbody>'
    return html
}
