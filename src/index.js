import { getCurrentWeather,getPhoto } from "./script.js";
import "./style.css"

const container = document.querySelector(".container")

const dataContainer = document.querySelector(".dataContainer")

getCurrentWeather("Kampala",loadUi,loadBg)

function getReadableTextColor(backgroundColor) {
    // Convert the background color to its RGB components
    const r = parseInt(backgroundColor.substring(1, 3), 16);
    const g = parseInt(backgroundColor.substring(3, 5), 16);
    const b = parseInt(backgroundColor.substring(5, 7), 16);
  
    // Calculate the relative luminance of the background color
    const relativeLuminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Determine whether to use white or black text based on luminance
    const textColor = relativeLuminance > 0.5 ? '#000000' : '#ffffff';
  
    return textColor;
}
  
function loadUi(data) {
    console.log(data.location.localtime_epoch)
    
    container.innerHTML=""
    dataContainer.innerHTML=""

    const date = new Date(data.location.localtime)
    makeTimediv(date.toLocaleTimeString({hour:"2-digit",minute:"2-digit",dayPeriod:"narrow"}),date.toLocaleDateString(undefined,{weekday:"long",month:"long",year:"numeric",day:"2-digit"}))
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

function loadBg(data) {
    container.style.background = `url(${data.photos[0].src.landscape})`
    container.style.backgroundSize='cover'
    container.style.backgroundRepeat='no-repeat'
    container.style.backgroundPosition='center center'

    const backgroundColor = data.photos[0].avg_color;
    const textColor = getReadableTextColor(backgroundColor);

    const timediv = document.querySelector(".timediv")
    timediv.style.backgroundColor=backgroundColor
    timediv.style.color = textColor

    const locationdiv = document.querySelector(".locationdiv")
    locationdiv.style.backgroundColor=backgroundColor
    locationdiv.style.color = textColor
}
function makeTimediv(time,date){
    const timediv = document.createElement("div")
    timediv.classList.add("timediv")
    const h = document.createElement("h1")
    h.textContent=time
    timediv.appendChild(h)

    const p = document.createElement("p")
    p.textContent=date
    timediv.appendChild(p)
    
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
        getCurrentWeather(input.value,loadUi,loadBg)
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

    const cond_img = new Image()
    cond_img.src=`https:${icon}`
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