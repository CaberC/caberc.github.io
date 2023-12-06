// This function loads the news page
function loadNewsPage() {
    // This is the div that contains all of the page elements that are swicthed
    // in and out via the nav menu.
    //API Docs: https://www.thenewsapi.com/documentation
    const pageContentContainer = document.getElementById("pageContentContainer")
    pageContentContainer.innerHTML = ""
    const refreshButton = document.getElementById("refresh")
    refreshButton.style.visibility="visible"
    getText('https://api.thenewsapi.com/v1/news/top?api_token=A94CCscceuleStvzHCncmcWqn8B25vq1VFCKS97X&locale=us&limit=3', 1)
}

function displayNews() {
    //alert(response["data"][0]["title"])
    const pageContentContainer = document.getElementById("pageContentContainer")
    pageContentContainer.innerHTML = ""
    
    for (let i=0; i<3; i++) {
        pageContentContainer.innerHTML += `
        <button
        <div class="storyContainer">
            <div class="imageContainer">
                <img class="newsStoryImage" src="${window.localStorage.getItem(`${i}img`)}" alt="Image associated with news story">
            </div>
            <div class="titleAndContentContainer">
                <div class="articleTitle">
                    <a href="${window.localStorage.getItem(`${i}url`)}" target="_blank" class="storyLink font orange">${window.localStorage.getItem(`${i}title`)}</a>
                    <p class="font white">${window.localStorage.getItem(`${i}snip`)}</p>
                </div>
            </div>
        </div>
        `
    }
}
