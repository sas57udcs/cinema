let elem = document.createElement("div")
let elemText = document.createTextNode("Кино")
elem.id = "yohoho"
elem.appendChild(elemText)

let Find = () => {
    let find_input = document.getElementById("Id_cinema")
    if (find_input.value) {
        let id = find_input.value
        elem.dataset.kinopoisk = id
        document.body.appendChild(elem)
        find_input.value = null
    }

}