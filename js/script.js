const formSearch = document.querySelector("form")
const apiKey = '2b1d5bef'

formSearch.onsubmit = async (ev)=>{
    ev.preventDefault()

    const search = ev.target.search.value

    if(search == ""){
        alert('Preencha o campo!')
        return
    } 
    await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}&lang=pt_br`)
        .then(result => result.json())
        .then(json => {loadList(json)})
}

const loadList = (json) => {
    const list = document.querySelector("div.list")
    list.innerHTML = ""

    if (json.Response == 'False'){
        alert('Nenhum filme encontrado!')
        return
    }
    console.log(json)
    json.Search.forEach(element => {

        let item = document.createElement("div")
        item.classList.add("item")

        item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2> <h4>${element.Year}</h4>`
        
        list.appendChild(item)
    });}