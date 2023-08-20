import { createClient } from 'pexels';

function getPhoto(query,loadBg) {
     const client = createClient('ncUD6JBdADIGBieFd4or7ADvnXkPdnJqGrLyAe09nbuiISP9HwtKk41H');
     client.photos.search({ 
          query,
          per_page: 1})
          .then(data => {
               loadBg(data)
          })
}
function getCurrentWeather(query,loadUi,loadBg){
     const key = "fd064e880a3f4e2886292005231808"
     const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`
     fetch(url,{mode:'cors'})
     .then((response)=>{
          return response.json()
     }).then((data)=>{
          loadUi(data)
          let bg_query = `${data.current.condition.text} sky bakground`
          getPhoto(bg_query.toString(),loadBg)
     })
}

export {getCurrentWeather}