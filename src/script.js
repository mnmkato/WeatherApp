import { createClient } from 'pexels';

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
function getPhoto(query,loadBg) {
     const client = createClient('ncUD6JBdADIGBieFd4or7ADvnXkPdnJqGrLyAe09nbuiISP9HwtKk41H');
     client.photos.search({ 
          query,
          per_page: 1})
          .then(data => {
               loadBg(data)
          })
}
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

export {getCurrentWeather,getReadableTextColor}