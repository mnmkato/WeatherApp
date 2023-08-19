const key = "fd064e880a3f4e2886292005231808"

function getCurrentWeather(query,loadUi){
     const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`
     fetch(url,{mode:'cors'})
     .then((response)=>{
          return response.json()
     }).then((data)=>{
          loadUi(data)
     })
}

export {getCurrentWeather}