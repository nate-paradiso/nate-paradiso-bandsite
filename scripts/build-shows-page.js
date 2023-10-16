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
    addTabletLabel();

  }catch(error) {
    console.error(error);

}
}
waitForShows()
  
  
// api shows display to page function
function addShows(){
    const shows = document.querySelector(".shows");
    for(let i = 0; i < showsArray.length; i++){
        const showsCard = document.createElement("div");
        const showsDateCont = document.createElement("div")
        const showsDateLabel = document.createElement("p");
        const showsDateLabelTablet = document.createElement("p");
        const showsDate = document.createElement("p");
        const showsVenueCont = document.createElement("div");
        const showsVenueLabel = document.createElement("p");
        const showsVenueLabelTablet = document.createElement("p")
        const showsVenue = document.createElement("p");
        const showsLocationCont = document.createElement("div");
        const showsLocationLabel = document.createElement("p");
        const showsLocationLabelTablet = document.createElement("p");
        const showsLocation = document.createElement("p");

        const buyNowButton = document.createElement("button");
        const showsLabelContainer = document.createElement("div")

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
        showsLabelContainer.classList.add("shows__card-labels")
        showsDateLabelTablet.classList.add("shows__card-labels--date-tablet")
        showsVenueLabelTablet.classList.add("shows__card-labels--venue-tablet")
        showsLocationLabelTablet.classList.add("shows__card-labels--location-tablet")
        buyNowButton.classList.add("shows__card--buy-button");

        showsDateLabel.innerText = showsArray[i].dateLabel || "date";
        showsDateLabelTablet.innerText = showsArray[i].dateLabel || "date";
        showsDate.innerText = showsArray[i].date;
        showsVenueLabel.innerText = showsArray[i].venueLabel || "venue";
        showsVenueLabelTablet.innerText = showsArray[i].venueLabel || "venue";
        showsVenue.innerText = showsArray[i].place;
        showsLocationLabel.innerText = showsArray[i].locationLabel || "location";
        showsLocationLabelTablet.innerText = showsArray[i].locationLabel || "location";
        showsLocation.innerText = showsArray[i].location;
        buyNowButton.innerText = showsArray[i].button || "BUY TICKETS";

        showsLabelContainer.appendChild(showsDateLabelTablet);
        showsLabelContainer.appendChild(showsVenueLabelTablet);
        showsLabelContainer.appendChild(showsLocationLabelTablet);
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

        shows.appendChild(showsLabelContainer);
        shows.appendChild(showsCard);

    }    
}

// shows labels for tablet and desktop view
function addTabletLabel(){
  const tabletLabels = document.querySelectorAll(".shows__card-labels");
  for(let i = 1; i < tabletLabels.length; i++){
    tabletLabels[i].classList.add("shows__card-labels--none");
  }
}

