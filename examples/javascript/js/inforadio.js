function showInput() {
    let e = document.querySelector('input[name="linguaggio"]:checked')
    if (e == null) { // nessuna opzione selezionata
        document.getElementById('radioNone').innerText = 'nessuna scelta'
        document.getElementById('radioValue').innerText = ''
    } else {
        document.getElementById('radioNone').innerText = 'scelta effettuata'
        let scelta = e.value
        document.getElementById('radioValue').innerText = scelta
    }
}

function annulla(what) {
    let e = document.querySelector('input[name="' + what + '"]:checked')
    if (e != null)
        e.checked = false
    // console.log(what)
}