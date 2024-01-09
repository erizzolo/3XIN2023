// "use strict"
function calcola() {

    let b = []  // array vuoto

    b.length = 5    // modifico il numero di elementi dell'array a 5

    modificaArray(b)

    let html = ''

    for(let i = 0; i < b.length; i++) {
        html += b[i] + ';'
    }

    document.getElementById('array').innerHTML = html
    let a = 0.1 + 0.2
    console.log(a)
    document.getElementById('array').innerHTML = a
    

    alert(b[89])
    alert(b.length)

}


function modificaArray(a) {
    // assegno valori casuali in [2, 25]
    const min = 2, max = 25

    for (let i = 0; i < a.length; i++) {
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min
    }

    // a.sort() // alfabetico !!!!

    a.push('ciccia')
    a.push([2, true, 3, null])

    let newLength = 10

    a.length = newLength

}

function varlet() {
    // console.log(letlet) letlet is not defined
    console.log(varvar)
    if (1 < 2) {
        let letlet = 10
        console.log(letlet)
        var varvar = 5
        console.log(varvar)
    }
    // console.log(letlet) letlet is not defined
    console.log(varvar)
}
