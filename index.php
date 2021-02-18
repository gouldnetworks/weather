<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
  
  <link rel="stylesheet" href="src/style.css<?php echo "?".strtotime("now");?>">
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <title>Weather App</title>
</head>

<body>
  <div class="background-image">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <form id="search-form"><input class="search-bar" type="text" placeholder="Search City" id="search-city" />
          </form>
        </div>
        <h2 id="city">-</h2>
        <h3><span id="current-day-time"></span></h3>
        <h4 id="city-condition">-</h4>
        <div class="row">
          <div class="col-md-6 col-sm-12">

            <h1><span id="temp" class="main-temp current-cel">0</span><span id="main-cel" class="temp-cel">°C</span>|<span id="main-fah" class="temp-fah">°F</span></h1>
          </div>
          <div class="col-xlg-4 col-lg-5 col-md-6 col-sm-12">
            <div class="box-weather-conditions">
              <p>

              <ul class="todays-weather" id="condtion">
                <li>Precipitation- <span id="precipitation">0</span>%</li>
                <li>Humidity- <span id="humidity">0</span>%</li>
                <li>Wind- <span id="wind">0</span> m/h</li>
              </ul>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <p class="forecast-title">FORECAST</p>
    <br>
    <div class="box-forecast">
      <div class="future-forecast">
        <div class="row">
          <div class="forecast-day-box col-lg col-sm-12">
            <div class="row">
              <div class="col-sm-12 forecast-day" id="day1-name">-</div>
            </div>
            <div class="row">
              <div class="col-sm-12 temp"><span id="day1-degrees">0</span>°</div>
            </div>
            <div class="row">
              <div class="col-sm-12 weather-icon" id="day1-icon"></div>
            </div>
          </div>
          <div class="forecast-day-box col-lg col-sm-12">
            <div class="row">
              <div class="col-sm-12 forecast-day" id="day2-name">-</div>
            </div>
            <div class="row">
              <div class="col-sm-12 temp"><span id="day2-degrees">0</span>°</div>
            </div>
            <div class="row">
              <div class="col-sm-12 weather-icon" id="day2-icon"></div>
            </div>
          </div>
          <div class="forecast-day-box col-lg col-sm-12">
            <div class="row">
              <div class="col-sm-12 forecast-day" id="day3-name">-</div>
            </div>
            <div class="row">
              <div class="col-sm-12 temp"><span id="day3-degrees">0</span>°</div>
            </div>
            <div class="row">
              <div class="col-sm-12 weather-icon" id="day3-icon"></div>
            </div>
          </div>
          <div class="forecast-day-box col-lg col-sm-12">
            <div class="row">
              <div class="col-sm-12 forecast-day" id="day4-name">-</div>
            </div>
            <div class="row">
              <div class="col-sm-12 temp"><span id="day4-degrees">0</span>°</div>
            </div>
            <div class="row">
              <div class="col-sm-12 weather-icon" id="day4-icon"></div>
            </div>
          </div>
          <div class="forecast-day-box col-lg col-sm-12">
            <div class="row">
              <div class="col-sm-12 forecast-day" id="day5-name">-</div>
            </div>
            <div class="row">
              <div class="col-sm-12 temp"><span id="day5-degrees">0</span>°</div>
            </div>
            <div class="row">
              <div class="col-sm-12 weather-icon" id="day5-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <p>
      <a href="https://github.com/BiancaBoyetteMartinez/My-Weather-App">Open Source project</a>
    </p>
    <br>
  </div>
  </div>
  <script src="src/index.js<?php echo "?".strtotime("now");?>"></script>
</body>

</html>