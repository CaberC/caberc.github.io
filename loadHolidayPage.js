// This function was such a pain to make
function loadHolidayPage() {
    // This is the div that contains all of the page elements that are swicthed
    // in and out via the nav menu.
    const pageContentContainer = document.getElementById("pageContentContainer")
    const refreshButton = document.getElementById("refresh") 
    refreshButton.style.visibility="visible"

    // First, we need all the month names as well as how many days are in each month in order.
    const monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthLenghts =[31,28,31,30,31,30,31,31,30,31,30,31]
    pageContentContainer.innerHTML = ``
    
    for (let i = 0; i < monthNames.length; i++) {
        pageContentContainer.innerHTML += `
        <div class=monthContainer>
            <div class=""monthNameContainer">
                <h2 class="monthName font blue">${monthNames[i]}</h2>
            </div>
            <div id="${monthNames[i]}" class="dayContainer">
                <div class="week" id="week1${monthNames[i]}">

                </div>
                <div class="week" id="week2${monthNames[i]}">
                
                </div>
                <div class="week" id="week3${monthNames[i]}">
                
                </div>
                <div class="week" id="week4${monthNames[i]}">
                
                </div>
                <div class="week" id="week5${monthNames[i]}">
                
                </div>
            </div>
        </div>
        `
        
        for (let j = 1; j <= monthLenghts[i]; j++) {
            if (j<8) {
                week = document.getElementById("week1"+monthNames[i])
            } else if (j<15) {
                week = document.getElementById("week2"+monthNames[i])
            } else if (j<22) {
                week = document.getElementById("week3"+monthNames[i])
            } else if (j<29) {
                week = document.getElementById("week4"+monthNames[i])
            } else {
                week = document.getElementById("week5"+monthNames[i])
            }
            if (i<9) {
                var monthString = "0"+(i+1).toString()
            } else {
                var monthString = (i+1).toString()
            }
            if (j<10) {
                var dayString = "0"+j.toString()
            } else {
                var dayString = j.toString()
            }
            week.innerHTML += `
                <div class="dateContainer">
                    <h2 id="2023-${monthString}-${dayString}" class="dateCode font blue">${dayString}</h2>
                </div>
            `
        }
    }

    // documentation: https://rapidapi.com/theapiguy/api/public-holiday

    const url = 'https://public-holiday.p.rapidapi.com/2023/US';
    getText(url,3)
}

function displayHolidays() {
    var len = window.localStorage.getItem(`len`)
    for (let i = 0; i < len; i++) {
        var date = window.localStorage.getItem(`${i}date`)
        var name = window.localStorage.getItem(`${i}name`)
        var day = document.getElementById(date)
        day.innerHTML += `<p class="font orange">${name}</p>`
        
    }
}