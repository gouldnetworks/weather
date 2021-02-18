// current time & date (search engine city)
let cityName = 'Campbell';//global city name holder

function outDayTime() {
  const now = new Date();
  const currentDayTime = document.querySelector("#current-day-time");
  currentDayTime.innerHTML = now.toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true });
  setTimeout(outDayTime, 10000);
}
outDayTime();


function get5DayForecast(){
  const day1 = new Date(Date.now()).toLocaleString('en-US',{weekday:'long'});
  const day2 = new Date(Date.now() + 1000*3600*24).toLocaleString('en-US',{weekday:'long'});
  const day3 = new Date(Date.now() + 1000*3600*48).toLocaleString('en-US',{weekday:'long'});
  const day4 = new Date(Date.now() + 1000*3600*72).toLocaleString('en-US',{weekday:'long'});
  const day5 = new Date(Date.now() + 1000*3600*96).toLocaleString('en-US',{weekday:'long'});
  console.log(`${day1} ${day2} ${day3} ${day4} ${day5}`);
  document.querySelector("#day1-name").innerHTML = day1;
  document.querySelector("#day2-name").innerHTML = day2;
  document.querySelector("#day3-name").innerHTML = day3;
  document.querySelector("#day4-name").innerHTML = day4;
  document.querySelector("#day5-name").innerHTML = day5;

}
get5DayForecast();

//ADDED END

function displayTemp(response) {
  console.log(response.data);
  dailyArray = response.data.daily;
  for (let i = 0; i < 5; i++) {
    const wCondition = dailyArray[i].weather[0].main;
    const wTemp = Math.round(dailyArray[i].temp.day);
    const wHumidity = Math.round(dailyArray[i].humidity);
    const wWind = Math.round(dailyArray[i].wind_speed);
    const wPrecipitation = Math.round((dailyArray[i].pop + Number.EPSILON) * 100) / 100;
    const dayNum = i+1;
    if(dayNum == 1){
      document.querySelector("#city").innerHTML = cityName;
      document.querySelector("#temp").innerHTML = wTemp;
      document.querySelector("#humidity").innerHTML = wHumidity;
      document.querySelector("#precipitation").innerHTML = wPrecipitation;
      document.querySelector("#wind").innerHTML = wWind;
      document.querySelector("#city-condition").innerHTML = wCondition;
    }
    document.querySelector(`#day${dayNum}-degrees`).innerHTML = wTemp;
    document.querySelector(`#day${dayNum}-icon`).innerHTML = weatherIcon(wCondition);

    
    
  }

  function weatherIcon(weatherCondition){
    switch (weatherCondition) {
      case 'Thunderstorm':
        iconOutput = '🌩️';
        break;
      case 'Drizzle':
        iconOutput = '🌦️';
        break;
      case 'Rain':
        iconOutput = '🌧️';
      case 'Smoke':
        break;
      case 'Snow':
        iconOutput = '🌨️';
        break;
      case 'Mist':
        iconOutput = '🌫️';
        break;
      case 'Smoke':
        iconOutput = '🌫️';
        break;
      case 'Haze':
        iconOutput = '🌫️';
        break;
      case 'Dust':
        iconOutput = '🌫️';
        break;
      case 'Fog':
        iconOutput = '🌫️';
        break;
      case 'Sand':
        iconOutput = '🌫️';
        break;
      case 'Dust':
        iconOutput = '🌫️';
        break;
      case 'Ash':
        iconOutput = '🌫️';
        break;
      case 'Squall':
        iconOutput = '🌫️';
        break;
      case 'Tornado':
        iconOutput = '🌪️';
        break;
      case 'Clear':
        iconOutput = '☀️';
        break;
      case 'Clouds':
        iconOutput = '☁️';
        break;
      default:
        iconOutput = '☀️';
    }
    return iconOutput;
  }

}

function getLatLong(cityNameSearch){
  cityName = cityNameSearch;
  const apiEndpoint = "https://api.opencagedata.com/geocode/v1/json?q=";
  const apiKey = "12a394b573554775b78035414679561a";
  const apiUrl = `${apiEndpoint}${cityNameSearch}&key=${apiKey}`;
  axios.get(apiUrl).then(getWeatherAPI);
}


function getWeatherAPI(response){
  const Lat = response.data.results[0].geometry.lat;
  const Lng = response.data.results[0].geometry.lng;
  const apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
  const apiKey = "6878b5f626b7c98659b0400085d3bba8";
  const units = "metric";
  const apiUrl = `${apiEndpoint}lat=${Lat}2&lon=${Lng}&exclude=hourly,minutely,alerts&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemp);
}

function search(event) {
  event.preventDefault();
  const city = document.querySelector("#search-city").value;
  getLatLong(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function autoRefresh(){
  getLatLong(cityName);
  setTimeout(autoRefresh, 1800000);//Every Half Hour
}
autoRefresh();

function convertToF(celsius) {
  // make the given fahrenheit variable equal the given celsius value
  // multiply the given celsius value by 9/5 then add 32
  let fahrenheit = celsius * 9 / 5 + 32
  // return the variable fahrenheit as the answer
  return fahrenheit;
}
function convertToC(fahrenheit) {
  // make the given fahrenheit variable equal the given celsius value
  // multiply the given celsius value by 9/5 then add 32
  let celsius = (5 / 9) * (fahrenheit - 32);
  // return the variable fahrenheit as the answer
  return celsius;
  
}


document.querySelectorAll('.temp-cel').forEach(function (el) {
  el.addEventListener('click', function () {
    current_id = this.id;
    start_of_id = current_id.substr(0,4);
    temp_id = `.${start_of_id}-temp`;
    currentElement = document.querySelector(temp_id);
    if (currentElement.classList.contains('current-cel')) {
    }else{
      cel_val = currentElement.innerHTML;
      currentElement.innerHTML = convertToC(cel_val);
      currentElement.classList.remove("current-fah");
      currentElement.classList.remove("current-cel");
      currentElement.classList.add("current-cel");
    }
  });
});


document.querySelectorAll('.temp-fah').forEach(function (el) {
  el.addEventListener('click', function () {
    current_id = this.id;
    start_of_id = current_id.substr(0, 4);
    temp_id = `.${start_of_id}-temp`;
    currentElement = document.querySelector(temp_id);
    if (currentElement.classList.contains('current-fah')) {
    } else {
      cel_val = currentElement.innerHTML;
      currentElement.innerHTML = convertToF(cel_val);
      currentElement.classList.remove("current-fah");
      currentElement.classList.remove("current-cel");
      currentElement.classList.add("current-fah");
    }
  });
});