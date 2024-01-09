let pass = 'admin'

function checkOld() {
    let old = getTextInput('old')
    let i = document.getElementById('old')
    console.log(i.classList)
    i.classList.add('attivo')
    i.classList.remove('errato')
    if (old == pass) {
        disableInput('new', false)
        disableInput('again', false)
        disableInput('old', true)
        showMessage("")
        let inew = document.getElementById('new')
        inew.classList.add('attivo')
        i.classList.add('corretto')
        i.classList.remove('attivo')
    } else {
        showMessage("Old password doesn't match")
        i.classList.add('errato')
    }
    console.log(i.classList)
}

function checkNew() {
    let nuova = getTextInput('new')
    disableInput('change', true)    // just in case ...
    let i = document.getElementById('new')
    console.log(i.classList)
    i.className = 'attivo corretto pippo ciccia'
    if (nuova == pass) {
        showMessage("New password must be different from old password")
    } else {
        let conferma = getTextInput('again')
        if (nuova == conferma) {
            showMessage("Press the button to change the password")
            disableInput('change', false)
        } else {
            showMessage("New password is different from confirmation password")
        }
    }
}

function showMessage(message) {
    document.getElementById('message').innerHTML = message
}

function getTextInput(id) {
    let text = ''
    let i = document.getElementById(id)
    if (i != null) {
        text = i.value
    }
    return text
}

function change() {
    let nuova = getTextInput('new')
    pass = nuova
    showMessage("Your password has been changed successfully")
    disableInput('new', true)
    disableInput('again', true)
    disableInput('old', false)
    disableInput('change', true)
}

function disableInput(id, disable) {
    document.getElementById(id).disabled = disable
}
