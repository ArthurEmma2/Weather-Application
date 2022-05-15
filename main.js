//  DOM MANIPULATIONS
const searchButtonEl = document.querySelector('.search button')
const searchBarEl = document.querySelector('.search-bar')
const cityEl = document.querySelector('.city')
const tempEl = document.querySelector('.temperature')
const descriptionEl  = document.querySelector('.description')
const humidityEl = document.querySelector('.humidity')
const windEl = document.querySelector('.wind')
const icon = document.querySelector('.icon')



// API INTEGRATION

let weather = {
    apiKey:"18ac9097096fa34e22b47f94ea0062f4",

    fetchWeather: function( city){
        fetch(

            "https://api.openweathermap.org/data/2.5/weather?q=" +
                                  city +
                                  "&units=metric&appid=" +
                                  this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data){
         const { name } = data 
         const { description, icon } = data.weather[0]
         const { temp, humidity } = data.main
         const {  speed } = data.wind 
        console.log(name, description, temp, humidity)
        cityEl.innerText = "weather in : " + name 
        tempEl.innerText = temp + "°C"
        descriptionEl.innerText = description
        icon.src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"
        humidityEl.innerText = "Humidity: " + humidity + "%"
        windEl.innerText ="windspeed: " + speed + "km/h"
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+ name +"')"
        document.querySelector('.loading').classList.remove('loading')


        
    },

    search: function(){
        this.fetchWeather( searchBarEl.value)
    }

}


searchButtonEl.addEventListener('click', (e)=>{
    weather.search()

})


searchBarEl.addEventListener('keyup', (e)=>{
    if(e.key === "Enter"){
        weather.search()
    }
})






weather.fetchWeather('ghana')




//         //Dom selecetion
//   const newCity = document.querySelector('.city')
//   const newTemp = document.querySelector('.temperature')
//   const newDescription = document.querySelector('.description')
//   const  newHumidity = document.querySelector('.humidity')
//   const newIcon = document.querySelector('.icon')
//   const newWind = document.querySelector('.wind')
//   const searchBar = document.querySelector('.search-bar')
//   const btn = document.querySelector('.search button')

//           //  come out with api key 
// let weather = {
//           apiKey: "18ac9097096fa34e22b47f94ea0062f4",
//           // COME OUT with fetchWeather method
//     fetchWeather: function (city) {
//         fetch(
//                     "https://api.openweathermap.org/data/2.5/weather?q=" +
//                       city +
//                       "&units=metric&appid=" +
//                       this.apiKey
//                   )
            
//                   //JSON RESPONSE
//                   .then((response) => response.json())
//                   .then((data) => weather.displayWeather(data))
    
//         },





//         displayWeather: function(data){
//             const { name } = data
//             const { description, icon } = data.weather[0]
//             const { temp, humidity } = data.main
//             const { speed} = data.wind

//             console.log(temp, humidity, speed, name, icon, description)
//             newCity.innerText = "weather in " + name 
//             newIcon.src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"
//             newTemp.innerText = temp + "°C"
//             newHumidity.innerText = "Humidity: " + humidity + "%"
//             newWind.innerText = "Windspeed: " + speed + " km/h"
//             document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
//             document.querySelector('.weather').classList.remove('loading')
            
          


// },


// search: function(){
//   this.fetchWeather(searchBar.value)
// }


 



// }
                                            

// btn.addEventListener('click', (e) =>{
//     weather.search()
// })


// searchBar.addEventListener('keyup', (e) =>{
//     if(e.key === "Enter"){
//         weather.search()
//     }
// })


// weather.fetchWeather('ghana')






// // let weather = {
// //     //fetch weather
// //     apiKey: "18ac9097096fa34e22b47f94ea0062f4",
// //     fetchWeather: function (city) {

// //       fetch(
// //         "https://api.openweathermap.org/data/2.5/weather?q=" +
// //           city +
// //           "&units=metric&appid=" +
// //           this.apiKey
// //       )

// //       //JSON RESPONSE
// //       .then((response) => response.json())
// //       .then((data) => weather.displayWeather(data))
// //   },

// // // access the api information
// //   displayWeather: function(data){
// //       const { name } = data;
// //       const {icon, description} = data.weather[0]
// //       const { temp, humidity } = data.main
// //       const { speed } = data.wind
// //       console.log(name, icon, description,humidity,speed)



// //     //   display the information on the screen
// //       document.querySelector('.city').innerText = "weather in " + name;
 
// //       document.querySelector('.description').innerText = description
// //       document.querySelector('.temperature').innerText = temp + "°C"
// //       document.querySelector('.humidity').innerText = "Humidity:  " + humidity + "%"
// //       document.querySelector('.wind').innerText = "Wind speed: " + speed + " km/h"
// //       document.querySelector('.weather').classList.remove('loading')
// //       document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name +"')"
      
// //   },

// //   search: function(){
// //       this.fetchWeather(document.querySelector('.search-bar').value)
     
// // },

  
// // }




// // const btn = document.querySelector('.search button')



// // btn.addEventListener('click', (e) =>{
// //     weather.search()

// // })


// // document.querySelector('.search-bar').addEventListener('keyup', (e) =>{
// // if(e.key === "Enter"){
// //     weather.search()
// // }

// // })

// // weather.fetchWeather("Ghana")






// // const newCity = document.querySelector('.city')
// // const newTemp = document.querySelector('.temperature')
// // const newDescription = document.querySelector('.description')
// // const  newHumidity = document.querySelector('.humidity')
// // const newIcon = document.querySelector('.icon')
// // const newWind = document.querySelector('.wind')








// // let weather = {
// //   //fetch weather
// //   apiKey: "18ac9097096fa34e22b47f94ea0062f4",
// //   fetchWeather: function (city) {

// //     fetch(
// //       "https://api.openweathermap.org/data/2.5/weather?q=" +
// //         city +
// //         "&units=metric&appid=" +
// //         this.apiKey
// //     )

// //     //JSON RESPONSE
// //     .then((response) => response.json())
// //     .then((data) => weather.displayWeather(data))
// // },

// // // access the api information
// // displayWeather: function(data){
// //     const { name } = data;
// //     const {icon, description} = data.weather[0]
// //     const { temp, humidity } = data.main
// //     const { speed } = data.wind
// //     console.log(name, icon, description,humidity,speed)



// //   //   display the information on the screen
// //   newCity.innerText = "weather in " + name 
// // newIcon.src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"
// //  newTemp.innerText = temp + "°C"
// //    newHumidity.innerText = "Humidity:" + humidity
// // newWind.innerText = "Windspeed: " + speed + " km/h"
// // document.querySelector('.weather').classList.remove('loading')
// // document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name +"')"
    
// // },


// // search: function(){
// //     this.fetchWeather(document.querySelector('.search-bar').value)
   
// // },


// // }




// // const btn = document.querySelector('.search button')



// // btn.addEventListener('click', (e) =>{
// //   weather.search()

// // })


// // document.querySelector('.search-bar').addEventListener('keyup', (e) =>{
// // if(e.key === "Enter"){
// //   weather.search()
// // }

// // })

// // weather.fetchWeather("Ghana")