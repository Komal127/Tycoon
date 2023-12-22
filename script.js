//digital watch//
function displaytime() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    document.querySelector(".hrs").innerHTML = hours;
    document.querySelector(".min").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;
    let session = document.querySelector(".session");

    day = 10;
    if(hours >= 12) {
        session.innerHTML = "PM";
    }
    else{
        session.innerHTML = "AM";
    }
}
setInterval(displaytime,10);

let successCallback = (position) => {
  // console.log(position);
  let lat = (position.coords.latitude);
  let long = (position.coords.longitude);
  console.log(lat,long)

async function fun(){
    let k = fetch(`http://api.weatherapi.com/v1/current.json?key=d6ce2be080484246946104655231209&q=${lat},${long}&aqi=no`)
    let response = await k ;
    let data = await response.json();
    console.log(data)
    a.innerHTML= data.current.temp_c
    b.innerHTML= data.location.name
    c.innerHTML= data.location.region
    d.innerHTML= data.location.country
    l.innerHTML= data.current.condition.text
  }
  setInterval(fun, 1000);
  
  
}
let errorCallback = (err) => {
  console.error(err)
}
let PositionOptions = (options) =>{
  
}

let a = document.querySelector('.tem');
let b = document.querySelector('.city');
let c = document.querySelector('.state');
let d = document.querySelector('.country');
let l = document.querySelector('.weather1');

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, PositionOptions)


let e = document.querySelector('.location1');
let f = document.querySelector('.zero-zero');
let g = document.querySelector('.feels0');
let h = document.querySelector('.zero3');
let i = document.querySelector('.zero4');
let j = document.querySelector('.state1');
let k = document.querySelector('.country1');


// let address = "Tokyo";

let searchbar = document.querySelector(".search");

searchbar.addEventListener("keyup", () => {
// this.value = access;
// console.log(`hello${access}`);
// alert(searchbar.value);



async function climate(){
  let k = fetch(`http://api.weatherapi.com/v1/current.json?key=d6ce2be080484246946104655231209&q=${searchbar.value}&aqi=no`)
  let response = await k ;
  let data = await response.json();
  console.log(data)
  
  e.innerHTML= data.location.name
  f.innerHTML= data.current.temp_c
  g.innerHTML= data.current.feelslike_c
  h.innerHTML= data.current.humidity
  i.innerHTML= data.current.wind_kph
  j.innerHTML= data.location.region
  k.innerHTML= data.location.country
  
  
}
setInterval(climate,10);

})