function loadHomePage() {
    // This is the div that contains all of the page elements that are swicthed
    // in and out via the nav menu.
    const pageContentContainer = document.getElementById("pageContentContainer")
    const refreshButton = document.getElementById("refresh")
    refreshButton.style.visibility="hidden"

    pageContentContainer.innerHTML = `

    <div id="teamTitleContainer">
    <h2 id="ourTeam" class="blue font">Our Team</h2>
    </div>

    <div id="teamMembersContainer">
        <div id="caberContainer">
            <div class="bio">
                <img class="headshot" src="images/caber.jpg" alt="Headshot of Caber">
                <div class="bioText">
                    <h2 class="orange font">Caber Caldwell</h2>
                    <p class="blue font">After graduating with a master's degree in "Looking at the weather" from Yale, Caber fulfilled his life long dream of joining a news team. Now, Caber enjoys sipping room temperature root beers while sitting on his porch radaring traffic. Caber also enjoys finding time for his hobbies, such as semi-perfessional macaroni art. </p>
                </div>
            </div>
        </div>
        <div id="josiahContainer">
            <div class="bio">
                <img class="headshot" src="images/josiah.jpg" alt="Headshot of Josiah">
                <div class="bioText">
                    <h2 class="orange font">Josiah Shirley</h2>
                    <p class="blue font">Josiah doesn't have much in the way of news experience, but what he lacks in the way of everything valuable, he makes up for with his can-do attitude! Josiah enjoys going to the local zoo and throwing things at the monkeys. He also enjoys going to bars, ordering only water, and leaving without tipping.</p>
                </div>
            </div>   
        </div>
    </div>
    `

}