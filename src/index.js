import { getCurrentWeather,getReadableTextColor} from "./script.js";
import "./style.css"

const container = document.querySelector(".container")
const dataContainer = document.querySelector(".dataContainer")

//set up default location
getCurrentWeather("Kampala",loadUi,loadBg)

function loadUi(data) {
    console.log(data)
   
    //clea previous data
    container.innerHTML=""
    dataContainer.innerHTML=""
    
    //display time and date
    const date = new Date(data.location.localtime)
    //TODO change time format to HH:MM AM/PM
    let time_text = date.toLocaleTimeString({hour:"2-digit",minute:"2-digit",dayPeriod:"narrow"})
    let date_text = date.toLocaleDateString(undefined,{weekday:"long",month:"long",year:"numeric",day:"2-digit"})
    const timeDiv = makeTopdiv(time_text,date_text)
    container.appendChild(timeDiv)
    
    //display search
    makeSearchDiv()
    
    //display city and country
    let city =data.location.name
    let country= data.location.country
    const locationDiv =  makeTopdiv(city,country,true)
    container.appendChild(locationDiv)

    //display condition and text
    let cond_icon = data.current.condition.icon
    let cond_text = data.current.condition.text
    const conditionDiv =  makeConditionDiv(cond_icon,cond_text)
    dataContainer.appendChild(conditionDiv)

    //display Tempreature
    let temp_c =data.current.temp_c+"\u00B0"
    const tempDiv =  makeDataDiv(temp_c, "Temperature")
    dataContainer.appendChild(tempDiv)

    //display precipitation
    let precipitation = data.current.precip_mm+" mm"
    const precipitationDiv =  makeDataDiv(precipitation,"Precipitation")
    dataContainer.appendChild(precipitationDiv)

    //display humidity
    let humidity = data.current.humidity+"%"
    const humidityDiv =  makeDataDiv(humidity,"Humidity")
    dataContainer.appendChild(humidityDiv)

    //display wind
    let wind = data.current.wind_kph+" km/h"
    const windDiv =  makeDataDiv(wind,"Wind")
    dataContainer.appendChild(windDiv)

     //display uv index
     let uv = data.current.uv
     const uvDiv =  makeDataDiv(uv,"UV index")
     dataContainer.appendChild(uvDiv)
}
function loadBg(data) {
    //dsplay backgorund cover photo
    let photo_url=data.photos[0].src.landscape
    container.style.background = `url(${photo_url})`
    container.style.backgroundSize='cover'
    container.style.backgroundRepeat='no-repeat'
    container.style.backgroundPosition='center center'

    //change location and time background and text color
    const backgroundColor = data.photos[0].avg_color;
    const textColor = getReadableTextColor(backgroundColor);
    const divs = document.querySelectorAll(".topdiv,.div,.searchDiv button")
    divs.forEach(div =>{
        div.style.backgroundColor=backgroundColor
        div.style.color = textColor
    })
}
function makeDataDiv(h_text,p_text) {
    const div = document.createElement("div")
    div.classList.add("div")

    const h = document.createElement("h1")
    h.textContent=h_text
    div.appendChild(h)

    const p = document.createElement("p")
    p.textContent=p_text
    div.appendChild(p)

    return div
}
function makeTopdiv(h_text,p_text,isLocationDiv){
    const div = document.createElement("div")
    div.classList.add("topdiv")
    if (isLocationDiv) {
        div.classList.add("locationdiv")
    }
    
    const h = document.createElement("h1")
    h.textContent=h_text
    div.appendChild(h)

    const p = document.createElement("p")
    p.textContent=p_text
    div.appendChild(p)
    
    return div
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

    //TODO sanitize inputs, add loading ui and handle response errors
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        getCurrentWeather(input.value,loadUi,loadBg)
})
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