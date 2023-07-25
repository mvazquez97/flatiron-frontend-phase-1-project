

let cityName=null;


//getting city name from input
let inputElement=document.querySelector('.weather-search-form');
inputElement.addEventListener('input',handleTextChange);
function handleTextChange(event){
  cityName=event.target.value
  console.log(cityName)
}

// adds event listener for search button click
 let searchBtn = document.querySelector(".search-button")
 searchBtn.addEventListener("click", getData);

// alerts when data does not match db.json

function getData() {
  if(!cityName){
    return alert('please enter city name')
  }
    fetch("http://localhost:3000/cities")
    .then(response => response.json())
    .then(json => {
      let cities=json;
      console.log(json)
      
      let city=cities.filter(obj=>obj.name.toLowerCase()==cityName.toLowerCase())[0];
      if(!city){
       return alert('city not found in data')
      }

      document.querySelector(".weather-city").innerHTML=city.name.toString();
      document.querySelector(".weather-forecast p").innerHTML=city.currentWeather.toString();
      document.querySelector(".weather-temperature").innerHTML=city.temperature.toString();
    })
}

