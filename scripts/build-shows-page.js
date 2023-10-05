const showsArray = [
    {
        dateLabel: "Date",
        date: "Mon Sept 06 2021",
        venueLabel: "Venue",
        venue: "Ronald Lane",
        locationLabel: "Location",
        location: "San Francisco, CA",
        button: "Buy Tickets"      
    },
    {
        dateLabel: "Date",
        date: "Tue Sept 21 2021",
        venueLabel: "Venue",
        venue: "Pier 3 East",
        locationLabel: "Location",
        location: "San Francisco, CA",
        button: "Buy Tickets" 
    },
    {
        dateLabel: "Date",
        date: "Fri Oct 15 2021",
        venueLabel: "Venue",
        venue: "View Lounge",
        locationLabel: "Location",
        location: "San Francisco, CA",
        button: "Buy Tickets" 
    },
    {
        dateLabel: "Date",
        date: "Sat Nov 06 2021",
        venueLabel: "Venue",
        venue: "Hyatt Agency",
        locationLabel: "Location",
        location: "San Francisco, CA",
        button: "Buy Tickets" 
    },
    {
        dateLabel: "Date",
        date: "Fri Nov 26 2021",
        venueLabel: "Venue",
        venue: "Moscow Center",
        locationLabel: "Location",
        location: "San Francisco, CA",
        button: "Buy Tickets" 
    },
    {
        dateLabel: "Date",
        date: "Wed Dec 15 2021 ",
        venueLabel: "Venue",
        venue: "Press Club",
        locationLabel: "Location",
        location: "San Francisco, CA",
        button: "Buy Tickets" 
    },
  ]
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
        showsDateLabel.innerText = showsArray[i].dateLabel;
        showsDate.innerText = showsArray[i].date;
        showsVenueLabel.innerText = showsArray[i].venueLabel;
        showsVenue.innerText = showsArray[i].venue;
        showsLocationLabel.innerText = showsArray[i].locationLabel;
        showsLocation.innerText = showsArray[i].location;
        buyNowButton.innerText = showsArray[i].button;
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
addShows()
function addTabletLabel(event){
    const tabletLabels = document.querySelectorAll(".shows__card--label");
    for(let i = 0; i < 3; i++){
        tabletLabels[i].classList.add("shows__card--label-tablet");
        tabletLabels[i].classList.add("shows__card--label-tablet");
        tabletLabels[i].classList.add("shows__card--label-tablet");
    }
}
addTabletLabel()
const showItems = document.querySelectorAll(".shows__card");
function clickOnRow(event) {
    for (let i = 0; i < showItems.length; i++) {
        showItems[i].classList.remove("shows__card--selected");
        // showItems[i].classList.remove("shows__card:hover");
    }
    event.currentTarget.classList.add("shows__card--selected");
}
for (let i = 0; i < showItems.length; i++) {
    showItems[i].addEventListener("click", clickOnRow);
}


