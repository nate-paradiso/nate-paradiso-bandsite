import {BandSiteAPI} from "./band-site-api.js";
const nateAPIKey = "?api_key=64a4eaa5-fa50-4983-9f6e-be86df125399";
const nateBandSiteAPI = new BandSiteAPI(nateAPIKey);
let showsArray = [];


// new time format--- this was tough....
function formatTime (timestamp) {
    const date = new Date(timestamp);
    const weekday = date.getDay();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const dayOfWeekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayTextName = dayOfWeekName[weekday];
    
    return `${dayTextName} ${month}/${day}/${year}`;
  }
  


// we need to wait for the data for each instance of the api so we put it in a async function. 
async function waitForShows () {
  try {
    const showsArrayApi = await nateBandSiteAPI.getShows();
    showsArray = showsArrayApi.map(show => ({...show, date: formatTime(show.date),}));
    addShows();

  }catch(error) {
    console.error(error);

}
}
waitForShows()
  
  
// api shows display to page function
function addShows(event){
    const shows = document.querySelector(".shows");
    for(let i = 0; i < showsArray.length; i++){
        const showsCard = document.createElement("div");
        const showsDateCont = document.createElement("div")
        const showsDateLabel = document.createElement("p");
        const showsDate = document.createElement("p");
        const showsVenueCont = document.createElement("div")
        const showsVenueLabel = document.createElement("p");
        const showsVenue = document.createElement("p");
        const showsLocationCont = document.createElement("div")
        const showsLocationLabel = document.createElement("p");
        const showsLocation = document.createElement("p");
        const buyNowButton = document.createElement("button");

        showsCard.classList.add("shows__card");
        showsDateCont.classList.add("shows__card-item");
        showsVenueCont.classList.add("shows__card-item");
        showsLocationCont.classList.add("shows__card-item");
        showsDateLabel.classList.add("shows__card--label");
        showsVenueLabel.classList.add("shows__card--label");
        showsLocationLabel.classList.add("shows__card--label");
        showsDate.classList.add("shows__card--date");
        showsVenue.classList.add("shows__card--text");
        showsLocation.classList.add("shows__card--text");
        buyNowButton.classList.add("shows__card--buy-button");

        showsDateLabel.innerText = showsArray[i].dateLabel || "date";
        showsDate.innerText = showsArray[i].date;
        showsVenueLabel.innerText = showsArray[i].venueLabel || "venue";
        showsVenue.innerText = showsArray[i].place;
        showsLocationLabel.innerText = showsArray[i].locationLabel || "location";
        showsLocation.innerText = showsArray[i].location;
        buyNowButton.innerText = showsArray[i].button || "BUY TICKETS";

        showsDateCont.appendChild(showsDateLabel);
        showsDateCont.appendChild(showsDate);
        showsVenueCont.appendChild(showsVenueLabel);
        showsVenueCont.appendChild(showsVenue);
        showsLocationCont.appendChild(showsLocationLabel);
        showsLocationCont.appendChild(showsLocation);
        showsCard.appendChild(showsDateCont);
        showsCard.appendChild(showsVenueCont);
        showsCard.appendChild(showsLocationCont);
        showsCard.appendChild(buyNowButton);

        shows.appendChild(showsCard);
    }    
}

// removes class for date venue and location titles for tablet and desktop view
function addTabletLabel(event){
    const tabletLabels = document.querySelectorAll(".shows__card--label");
    for(let i = 0; i < 3; i++){
        tabletLabels[i].classList.add("shows__card--label-tablet");
    }
}
addTabletLabel()

// click effect on background color
const showItems = document.querySelectorAll(".shows__card");

function clickOnRow(event) {
    for (let i = 0; i < showItems.length; i++) {
        showItems[i].classList.remove("shows__card--selected");
    }
    event.currentTarget.classList.add("shows__card--selected");
}
for (let i = 0; i < showItems.length; i++) {
    showItems[i].addEventListener("click", clickOnRow);
}
