//https://goweather.herokuapp.com/weather/%7Bcity%7D

// Elements 

fetch("http://localhost:3000/cities")
.then(response => response.json())
.then(json => 
