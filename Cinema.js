let elem = document.createElement("div")
let elemText = document.createTextNode("Кино")
elem.id = "yohoho"
elem.appendChild(elemText)

let elemscript = document.createElement('script');
elemscript.type = 'text/javascript';
elemscript.src = '//yohoho.cc/yo.js';

let Find = () => {
    let find_input = document.getElementById("Id_cinema")
    if (find_input.value) {
        let id = find_input.value
        elem.dataset.kinopoisk = id
        document.body.appendChild(elem)
        find_input.value = null
        document.body.appendChild(elemscript)
    }

}