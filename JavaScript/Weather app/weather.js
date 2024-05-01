const apiKey = '88b64a7eed8443338311f618e5c23ef2';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherImage = document.querySelector('.weather-image')
async function checkWeather(city){
    const response = await fetch (apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main==='Clouds'){
       weatherImage.src = 'clouds.png';
    }
    else if(data.weather[0].main === 'Clear'){
        weatherImage.src = 'clear.png';
    }
    else if(data.weather[0].main === 'Rain'){
        weatherImage.src = 'rain.png';
    }
    else if(data.weather[0].main === 'Drizzle'){
        weatherImage.src = 'drizzle.png';
    }
    else if(data.weather[0].main === 'Mist'){
        weatherImage.src = 'mist.png';
    }
    else if(data.weather[0].main === 'Snow'){
        weatherImage.src = 'snow.png';
    }
}
searchButton.addEventListener('click',()=>{
    checkWeather(searchBox.value);
    searchBox.value = '';
})