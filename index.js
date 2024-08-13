const btn = document.querySelector("button");
const input_data = document.querySelector("input");
const image = document.querySelector(".result > img");
const tData = document.querySelector("#temp");
const city = document.querySelector("#city");
const hData = document.querySelector("#h-data");
const wData = document.querySelector("#w-data");
const result = document.querySelector(".result");
const $error = document.querySelector("#error");

btn.addEventListener("click", e=> {
    city.innerHTML = input_data.value;
    const key = 'ee43281d162526fcfedf75039c5cbe14';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.innerHTML}&appid=${key}&units=metric`;

    async function checkWeather () {
        try {
            const response = await fetch(url);
            const data = await response.json();

            tData.innerHTML = Math.round(data.main.temp);
            hData.innerHTML = data.main.humidity;
            wData.innerHTML = data.wind.deg;

            if(data.weather[0].main == 'Clouds') {
                image.src = "./images/clouds.png";
            } else if (data.weather[0].main == 'clear') {
                image.src = "./images/clear.png";
            } else if (data.weather[0].main == 'drizzle') {
                image.src = "./images/drizzle.png";
            } else if (data.weather[0].main == 'rain') {
                image.src = "./images/rain.png";
            } else if (data.weather[0].main == 'snow') {
                image.src = "./images/snow.png";
            } else if (data.weather[0].main == 'clear') {
                image.src = "./images/mist.png";
            }

            result.style.display = "grid";
            $error.style.display = "none";
        } catch (error) {
            result.style.display = "none";
            $error.style.display = "block";
        }
    }
        checkWeather();
})