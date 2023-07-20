document.addEventListener("DOMContentLoaded", () => {
    getData();
  });

 
// function search() {
//     document.getElementsByClassName("search-button").addEventListener("click", getData());
// }

 let searchBtn = document.querySelector(".search-button")
 searchBtn.addEventListener("click", () => getData());


function getData() {
    fetch("http://localhost:3000/cities")
    .then(response => response.json())
    .then(json => console.log(json))
}

