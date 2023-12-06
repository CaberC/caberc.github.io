
// I wonder what this function loads???
function loadWeatherPage() {
    // This is the div that contains all of the page elements that are swicthed
    // in and out via the nav menu.
    const pageContentContainer = document.getElementById("pageContentContainer")
    pageContentContainer.innerHTML = ""
    const refreshButton = document.getElementById("refresh")
    refreshButton.style.visibility="visible"

    var location = 59718
    navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude 
        var lon = position.coords.longitude
        location = lat.toString() + "," + lon.toString()
    });
    getText(`http://api.weatherstack.com/current?access_key=97d15e7c90db23a58c0bc6437a507d1f&query=${location}`,2)
}

function displayWeather() {
    const pageContentContainer = document.getElementById("pageContentContainer")
    pageContentContainer.innerHTML = ""
    // https://weatherstack.com/documentation <-- for API documention
    
    pageContentContainer.innerHTML += `
        <style src="style/weatherPage.css"></style>
        <div class="locationSpecificDataContainer spaceTopways">
            <div class="topHalf">
                <div class="iconContainer spaceSideways">
                    <img class="weatherIcon" src="${window.localStorage.getItem("weather_icons")}" alt="Icon that indicates the current weather status">
                </div>
                <div class="tempContainer spaceSideways">
                    <h3 class="font  spaceSideways white center">
                    ${((window.localStorage.getItem("temperature")*(9/5))+32).toString() + "&deg;F"}                        
                    </h3>
                </div>
                <div class="timeAndDescriptionContainer spaceSideways">
                    <h3 class="font spaceSideways white center">
                    ${window.localStorage.getItem("localtime")}
                    </h3>
                    <h2 class="font spaceSideways white center">
                    ${window.localStorage.getItem("weather_descriptions")}
                        
                    </h2>
                </div>
            </div>
            <div class="bottomHalf">
                <table>
                    <tr>
                        <th class="font white center">
                            Wind Speed
                        </th>
                        <th class="font white center">
                            Wind Direction
                        </th>
                        <th class="font white center">
                            Precipitation
                        </th>
                        <th class="font white center">
                            Humidity
                        </th>
                        <th class="font white center">
                            Feels Like
                        </th>
                    </tr>
                    <tr>
                        <td class="font white center">
                        ${window.localStorage.getItem("wind_speed")+ " MPH"}                        
                        </td>
                        <td class="font white center">
                        ${window.localStorage.getItem("wind_dir")}
                        </td>
                        <td class="font white center">
                        ${window.localStorage.getItem("precip")}
                        </td>
                        <td class="font white center">
                        ${window.localStorage.getItem("humidity")}
                        </td>
                        <td class="font white center">
                        ${((window.localStorage.getItem("feelslike")*(9/5))+32).toString() + "&deg;F"}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `
}
    
