 // Buttons (That are really div elements.)
 const homeButton = document.getElementById("homeContainer")
 const newsButton = document.getElementById("newsContainer")
 const weatherButton = document.getElementById("weatherContainer")
 const holidayButton = document.getElementById("holidayContainer")

 // Event listeners for the aforementioned buttons (That aren't really buttons.)
homeButton.addEventListener('click', loadHomePage)
newsButton.addEventListener('click', loadNewsPage)
weatherButton.addEventListener('click', loadWeatherPage)
holidayButton.addEventListener('click', loadHolidayPage)

 // Each content block that can be loaded in and out has its own loading function
 // that is named with the convention: "load${name}page() {}""
 
const refreshButton = document.getElementById("refresh")
const STORAGE_KEY = "newsWPA"
const BOOL_KEY = "hasSaved"

refreshButton.addEventListener("click", (e) =>{
    e.preventDefault()
    window.localStorage.clear()
    loadHomePage()
    console.log("Refreshing")
})
 
async function getText(url, pg){
    const has = window.localStorage.getItem(BOOL_KEY)
    if(!(has=="1")){        
        switch (pg){
            case 1:
                if(window.localStorage.getItem(BOOL_KEY+"News")!="1")
                {console.log("new user, pushing data")
                    await fetch(url)
                    .then(res=>res.json())
                    .then(pushNewsData)
                }else{console.log("returning user, pulling data")}
                break
            case 2:
                if(window.localStorage.getItem(BOOL_KEY+"Wthr")!="1")
                {
                    await fetch(url)
                    .then(async (res)=>{
                        res = await res.json()
                        return res
                    })
                    .then(pushWthrData)
                }else{console.log("returning user, pulling data")}
                break
            case 3:
                if(window.localStorage.getItem(BOOL_KEY+"Holi")!="1"){
                    console.log("new user, pushing data")
                    const options = {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': '3f7fb5cf29msh7dc7b57f9d09e28p17cef6jsn62966adbfec8',
                            'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
                        }
                    };
                    await fetch(url, options)
                    .then(res=>res.json())
                    .then(pushHoliData)
                }else{console.log("returning user, pulling data")}
                break
        }
    }else{console.log("returning user, all data collected")}
    switch (pg){
        case 1:
            displayNews()
            break
        case 2:
            displayWeather()
            break
        case 3:
            displayHolidays()
            break
    }
        
    
}

function pushNewsData(response){
    var newsStory = response["data"]
    
    for (let i=0; i<3; i++) {
        window.localStorage.setItem(`${i}img`, newsStory[i]["image_url"])
        window.localStorage.setItem(`${i}url`, newsStory[i]["url"])
        window.localStorage.setItem(`${i}title`, newsStory[i]["title"])
        window.localStorage.setItem(`${i}snip`, newsStory[i]["snippet"])
    }
    window.localStorage.setItem(BOOL_KEY+"News", "1")
    if((window.localStorage.getItem(BOOL_KEY+"Wthr")=="1")&&(window.localStorage.getItem(BOOL_KEY+"Holi")=="1")){
        window.localStorage.setItem(BOOL_KEY, "1")
    }

}

function pushWthrData(response){
    var weatherData = response["current"]

    window.localStorage.setItem("weather_icons", weatherData["weather_icons"])
    window.localStorage.setItem("temperature", weatherData["temperature"])
    window.localStorage.setItem("localtime", response["location"]["localtime"])
    window.localStorage.setItem("weather_descriptions", weatherData["weather_descriptions"])
    window.localStorage.setItem("wind_speed", weatherData["wind_speed"])
    window.localStorage.setItem("wind_dir", weatherData["wind_dir"])
    window.localStorage.setItem("precip", weatherData["precip"])
    window.localStorage.setItem("humidity", weatherData["humidity"])
    window.localStorage.setItem("feelslike", weatherData["feelslike"])

    window.localStorage.setItem(BOOL_KEY+"Wthr", "1")
    if((window.localStorage.getItem(BOOL_KEY+"News")=="1")&&(window.localStorage.getItem(BOOL_KEY+"Holi")=="1")){
        window.localStorage.setItem(BOOL_KEY, "1")
    }
}

function pushHoliData(response){
    var len = response.length
    window.localStorage.setItem(`len`, len)
    for (let i = 0; i < len; i++) {
        window.localStorage.setItem(`${i}date`, response[i]["date"])
        window.localStorage.setItem(`${i}name`, response[i]["name"])
    }
    window.localStorage.setItem(BOOL_KEY+"Holi", "1")
    if((window.localStorage.getItem(BOOL_KEY+"News")=="1")&&(window.localStorage.getItem(BOOL_KEY+"Wthr")=="1")){
        window.localStorage.setItem(BOOL_KEY, "1")
    }
}

const notif = document.getElementById("notifications")

notif.addEventListener("click", () => {
  console.log("permission?")
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification()
      console.log("permission granted")
    }
  })
})

const instalButton = document.getElementById("install")
instalButton.addEventListener("click", install)

function randomNotification() {
    const notifTitle = "Hello World!"
    const notifBody = `The notifications work even when the page isn't open!`
    const notifImg = `Logo.png`
    const options = {
      body: notifBody,
      icon: notifImg,
    }
    new Notification(notifTitle, options)
    setTimeout(randomNotification, 20000)
}