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
        const showsDateLabel = document.createElement("p");
        const showsDate = document.createElement("p");
        const showsVenueLabel = document.createElement("p");
        const showsVenue = document.createElement("p");
        const showsLocationLabel = document.createElement("p");
        const showsLocation = document.createElement("p");
        const buyNowButton = document.createElement("button");
        showsCard.classList.add("shows__card");
        // showsCard.classList.add("shows__card--selected");
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
        showsCard.appendChild(showsDateLabel);
        showsCard.appendChild(showsDate);
        showsCard.appendChild(showsVenueLabel);
        showsCard.appendChild(showsVenue);
        showsCard.appendChild(showsLocationLabel);
        showsCard.appendChild(showsLocation);
        showsCard.appendChild(buyNowButton);
        shows.appendChild(showsCard);
    }
    
}
addShows()

const showItems = document.querySelectorAll(".shows__card");

function clickOnRow(event) {
    showItems.forEach(row => showItems.classList.add("shows__card--selected"));
    showItems.eventTarget.classList.remove("shows__card--selected");
}
showItems.forEach(row => {
    showItems.addEventListener("click", clickOnRow);
});