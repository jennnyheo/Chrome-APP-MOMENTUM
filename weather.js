const API_KEY = "8220791a48b6ff3bddd37adc53e6211b";
const cityContainer = document.querySelector("#weather span:first-child");
const weatherContainer = document.querySelector("#weather span:last-child");


function onGeo(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat , lng );
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const name = data.name;
        const weather = data.weather[0].main
        const temp = data.main.temp;
        cityContainer.innerText = name;
        weatherContainer.innerText = weather +" and "+ temp + "°C ";

        });
}
function onGeoError(){
    alert("Cant find your location, no weather data for you😥")
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);

