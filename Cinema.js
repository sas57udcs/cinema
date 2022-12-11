let elem = document.createElement("div")
let elemText = document.createTextNode("Кино")
elem.id = "yohoho"
elem.appendChild(elemText)
//let baseurl = new URL('https://sas57udcs.github.io/cinema/')
let baseurl = new URL('file:///C:/Users/ssa/Downloads/Cinema/index.html')
let hash_id = window.location.hash

let loading_player = () => {
    if (hash_id) {
        let id = hash_id.substring(1)
        elem.dataset.kinopoisk = id
        document.body.appendChild(elem)
        find_input.value = null
    }
}

let Find = () => {
    let find_input = document.getElementById("Id_cinema")
    if (find_input.value) {
        let id = find_input.value
        let url = new URL('#' + id, baseurl)
        location.href = url;
        window.location.reload();
    }
}
loading_player()

