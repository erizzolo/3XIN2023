// core javascript

// la funzione fill sarà eseguita quando il documento è caricato
// Document Object Model: Content Loaded ....
// gli elementi del codice html saranno noti al browser ...
window.addEventListener('DOMContentLoaded', fill)

/**
 * Funzione eseguita al caricamento del documento;
 * impostazione elementi comuni ed altro, eventualmente
 * @param {*} event the DOMContentLoaded event
 */
function fill(event) {
    console.log(event)    // l'evento che ha provocato l'esecuzione
    // la "location" del documento attuale - proprietà href, pathname, ....
    console.log('fill: href ' + window.location.href)
    console.log('fill: pathname ' + window.location.pathname)
    // suddivisione del pathname in (array di) pezzi delimitati da '/'
    let splitted = window.location.pathname.split('/')
    console.log(splitted)
    // page name, may be "" for index.html 
    let page = splitted[splitted.length - 1]    // last piece
    // folder name, "" for index.html, "html" for other pages 
    let folder = splitted[splitted.length - 2]    // but last piece
    console.log(page, folder)
    // page = page.substring(0, page.length - 5)
    fillCommon(page, folder)
}

/**
 * Fill site common elements
 * @param  {} page the name of the page (e.g. 'index')
 * @param  {} folder the name of the folder (e.g. 'html')
 */
function fillCommon(page, folder) {
    addCookieInfo(page, folder)
    fillHeader(page, folder)
    fillNavbar(page, folder)
    fillNews(page, folder)
    // fillFooter(page, folder) // not used: iframes instead
    // disable context menu (i.e. right mouse button)
    document.querySelector('body').addEventListener('contextmenu', noMenu)
}

function noMenu(event) {
    event.preventDefault()
}

/**
 * Add cookie info section
 * @param  {} page the name of the page (e.g. 'index')
 * @param  {} folder the name of the folder (e.g. 'html')
 */
function addCookieInfo(page, folder) {
    // let body = document.querySelector('body')
    // let h1 = document.createElement('h1')
    // h1.innerHTML = 'No cookie here...'
    // if(body.firstChild != null) {
    //     body.insertBefore(h1, body.firstChild)
    // } else {
    //     body.appendChild(h1)
    // }
}

/**
 * Fill header element
 * @param  {} page the name of the page (e.g. 'index')
 * @param  {} folder the name of the folder (e.g. 'html')
 */
function fillHeader(page, folder) {
    const e = document.getElementById("site-header")
    if (e != null) {
        let parent = folder.endsWith('html') ? '../' : ''
        let h = ''
        h += `<img src="${parent}images/logoiisleviponti.png"`
        h += ` alt="Logo dell'Istituto Levi-Ponti">`
        h += '<h1>Welcome to our site: enjoy!</h1>'
        e.innerHTML = h
        e.title = 'Dynamic code generated ' + new Date()
    } else {
        console.log("no site-header element for " + folder + "/" + page)
    }
}

/**
 * Fill nav element
 * @param  {} page the name of the page (e.g. 'index')
 * @param  {} folder the name of the folder (e.g. 'html')
 */
function fillNavbar(page, folder) {
    const e = document.getElementById("site-navbar")
    if (e != null) {
        // home page
        let parent = folder.endsWith('html') ? '../' : ''
        let h = linkFor('index.html', 'Home page', parent, page)
        // all other pages
        parent = folder.endsWith('html') ? '' : 'html/'
        h += linkFor('games.html', 'Giochi', parent, page)
        h += linkFor('exercises.html', 'Esercizi', parent, page)
        h += linkFor('about.html', 'About', parent, page)
        h += linkFor('policy.html', 'Privacy policy', parent, page)
        h += linkFor('credits.html', 'Credits', parent, page)
        e.innerHTML = h
        e.title = 'Dynamic code generated ' + new Date()
    } else {
        console.log("no site-navbar element for " + folder + "/" + page)
    }
}

/**
 * Make HTML code for an a element
 * @param {*} href destination
 * @param {*} name link content
 * @param {*} parent whether to go to parent folder
 * @param {*} from actual document
 * @returns the HTML code
 */
function linkFor(href, name, parent, from) {
    const classAttribute = href == from ? ' class="active"' : '';
    return `<a href="${parent + href}"${classAttribute}>${name}</a>`
}

/**
 * Fill news element
 * @param  {} page the name of the page (e.g. 'index')
 * @param  {} folder the name of the folder (e.g. 'html')
 */
function fillNews(page, folder) {
    const e = document.getElementById("site-news")
    // Doesn't work on local files (CORS must be http)
    // fallback on using iframe ???
    if (e != null) {
        let where = folder.endsWith('html') ? '' : 'html/'
        fetch(where + 'news.txt')
            .then(response => { if (response.ok) return response; throw Error('?') })
            .then(response => response.text())
            .then(text => e.innerHTML = text)
            .catch(error => e.innerHTML = `<iframe src="${where + 'news.html'}"></iframe>`)
        e.title = 'Dynamic code generated ' + new Date()
    } else {
        console.log("no site-news element for page " + page)
    }
}

