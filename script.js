const url = "https://api.openweathermap.org/data/2.5/";
const key = "8b4d79ae0a2d3e5d28b157f6a6bc2bd7";
const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
  searchBar.value = "";
};

const displayResult = (weather) => {
  let city = document.querySelector(".city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(weather.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  if (weather.weather[0].description == "aydın səma") {
    desc.innerText = "Açıq Hava";
  } else {
    desc.innerText = `${weather.weather[0].description}`;
  }

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;

  let body = document.querySelector(".body");
  const weatherClasses = ["offCloudy", "clearSky", "fewCloud", "fog", "rain", "heavyRain", "veryHeavyRain", "extremeRain", "thunderstorm", "snow"];
  body.classList.remove(...weatherClasses);
  if (weather.weather[0].id == "800") {
    body.classList.add("clearSky");
  }
  if (weather.weather[0].id == "804") {
    body.classList.add("offCloudy");
  }
  if (weather.weather[0].id == "801" || weather.weather[0].id == "802" || weather.weather[0].id == "803") {
    body.classList.add("fewCloud");
  }
  if (weather.weather[0].main == "Mist" || weather.weather[0].main == "Haze" || weather.weather[0].main == "Smoke" || weather.weather[0].main == "Fog") {
    body.classList.add("fog");
  }
  if (weather.weather[0].id == "501" || weather.weather[0].id == "500") {
    body.classList.add("rain");
  }
  if (weather.weather[0].id == "503") {
    body.classList.add("veryHeavyRain");
  }
  if (weather.weather[0].id == "502") {
    body.classList.add("heavyRain");
  }
  if (weather.weather[0].id == "504") {
    body.classList.add("extremeRain");
  }
  if (weather.weather[0].main == "Thunderstorm") {
    body.classList.add("thunderstorm");
  }
  if (weather.weather[0].main == "Snow") {
    body.classList.add("snow");
  }
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);

const loaded = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityloaded}&appid=8b4d79ae0a2d3e5d28b157f6a6bc2bd7&units=metric&lang=az`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

window.addEventListener("DOMContentLoaded", loaded);

const cityName = [
  "Baku",
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Rome",
  "Barcelona",
  "Amsterdam",
  "Prague",
  "Berlin",
  "Athens",
  "Venice",
  "Vienna",
  "Hong Kong",
  "Moscow",
  "Sydney",
  "Cappadocia",
  "Cairo",
  "Rio de Janeiro",
  "Cape Town",
  "Toronto",
  "Singapore",
  "Istanbul",
  "Jerusalem",
  "Copenhagen",
  "Edinburgh",
  "Dubai",
  "Zurich",
  "Los Angeles",
  "Lisbon",
  "Marrakech",
  "Seoul",
  "Mexico City",
  "Bangkok",
  "Cairo",
  "Delhi",
  "Havana",
  "Budapest",
  "Shanghai",
  "Warsaw",
  "Sydney",
  "Cape Town",
  "Riyadh",
  "Chicago",
  "Abu Dhabi",
  "Helsinki",
  "Cape Town",
  "San Francisco",
  "Jerusalem",
  "Alexandria",
  "Amman",
];
let randomCity = Math.floor(Math.random() * cityName.length);
const cityloaded = cityName[randomCity];