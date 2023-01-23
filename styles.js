const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '22b2edd614mshdec20d9ad6ddf0ap1adc82jsnfd83819fb89c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
//let city = 'delhi'
const getWeather = (ans) => {
    cityName.innerHTML = ans
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + ans, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            humidity2.innerHTML = response.humidity
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity

            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp

            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}
const el = document.getElementById("sub")

el.addEventListener("click", (r) => {
    r.preventDefault()
    getWeather(ans.value)
});
getWeather("Delhi");

const gethydWeather = () => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            hydwind_speed.innerHTML = response.wind_speed
            hydtemp.innerHTML = response.temp
            hydhumidity.innerHTML = response.humidity
        })
        .catch(err => console.error(err));
}
gethydWeather();
const getdelWeather = () => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            wind_speed2.innerHTML = response.wind_speed
            temp3.innerHTML = response.temp
            humidity3.innerHTML = response.humidity
        })
        .catch(err => console.error(err));
}
getdelWeather();
const getchWeather = () => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            chwind_speed.innerHTML = response.wind_speed
            chtemp.innerHTML = response.temp
            chhumidity.innerHTML = response.humidity
        })
        .catch(err => console.error(err));
}
getchWeather();