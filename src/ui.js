import { getCurrentWeather } from "./script.js";

const container = document.querySelector(".container")
const dataContainer = document.querySelector(".dataContainer")

getCurrentWeather("Kampala",loadUi)
function loadUi(data) {
    //console.log(data.current)
    //let condition=data.current.condition.text
    container.innerHTML=""
    dataContainer.innerHTML=""
    makeTimediv(data.location.localtime)
    makeSearchDiv()
    makeLocationDiv(data.location.name,data.location.country)
    
    const datadiv = document.createElement("div")
    datadiv.classList.add("datadiv")
    dataContainer.appendChild(datadiv)
    
    const conditionDiv =  makeConditionDiv(data.current.condition.icon,data.current.condition.text)
    datadiv.appendChild(conditionDiv)

    const tempDiv =  makeTempDiv(data.current.temp_c)
    datadiv.appendChild(tempDiv)

}

function makeTimediv(text){
    const timediv = document.createElement("div")
    timediv.classList.add("timediv")
    timediv.textContent=text
    container.appendChild(timediv)
}
function makeSearchDiv() {
    const searchDiv = document.createElement("div")
    searchDiv.classList.add("searchDiv")
    container.appendChild(searchDiv)

    const form = document.createElement("form")
    searchDiv.appendChild(form)

    const input = document.createElement("input")
    input.setAttribute("type","search")
    form.appendChild(input)

    const btn = document.createElement("button")
    btn.textContent="Search"
    btn.setAttribute("type","submit")
    form.appendChild(btn)

    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        getCurrentWeather(input.value,loadUi)
})
}
function makeLocationDiv(city,country) {
    const locationdiv = document.createElement("div")
    locationdiv.classList.add("locationdiv")
    container.appendChild(locationdiv)

    const h = document.createElement("h1")
    h.textContent=city
    locationdiv.appendChild(h)

    const p = document.createElement("p")
    p.textContent=country
    locationdiv.appendChild(p)

}
function makeConditionDiv(icon,text) {
    const div = document.createElement("div")
    div.classList.add("div")

    const cond_img = document.createElement("img")
    cond_img.src=icon
    div.appendChild(cond_img)

    const p = document.createElement("p")
    p.textContent=text
    div.appendChild(p)

    return div
}
function makeTempDiv(temp) {
    const div = document.createElement("div")
    div.classList.add("div")
    const h = document.createElement("h1")
    h.textContent=temp+"\u00B0"
    div.appendChild(h)
    return div
}