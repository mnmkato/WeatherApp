import { createClient } from 'pexels';

const key = "fd064e880a3f4e2886292005231808"
function getCurrentWeather(query,loadUi){
     
const client = createClient('ncUD6JBdADIGBieFd4or7ADvnXkPdnJqGrLyAe09nbuiISP9HwtKk41H');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {console.log(photos)});

     const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`
     fetch(url,{mode:'cors'})
     .then((response)=>{
          return response.json()
     }).then((data)=>{
          loadUi(data)
     })
}

export {getCurrentWeather}