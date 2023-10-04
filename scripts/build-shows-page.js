const shows = [
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
  ]
function addShows(event){
    
    const showsContainer = document.querySelector(".shows__container");
    for(let i = 0; i < shows.length; i++){
        const showsCard = document.createElement("div");
        const showsDateLabel = document.createElement("p");
        const showsDate = document.createElement("p");
        
        const showsVenueLabel = document.createElement("p");
        const showsVenue = document.createElement("p");
        
        const showsLocationLabel = document.createElement("p");
        const showsLocation = document.createElement("p");
        
        const buyNowButton = document.createElement("button");

        showsCard.classList.add("shows__container");
        showsDateLabel.classList.add("shows__label");
        showsVenueLabel.classList.add("shows__label");
        showsLocationLabel.classList.add("shows__label");
        showsDate.classList.add("shows__date");
        showsVenue.classList.add("shows__text");
        showsLocation.classList.add("shows__text");
        buyNowButton.classList.add("shows__buy-button");

        
        showsDateLabel.innerText = shows[i].dateLabel;
        showsDate.innerText = shows[i].date;
        showsVenueLabel.innerText = shows[i].venueLabel;
        showsVenue.innerText = shows[i].venue;
        showsLocationLabel.innerText = shows[i].locationLabel;
        showsLocation.innerText = shows[i].location;
        buyNowButton.innerText = shows[i].button;


        showsCard.appendChild(showsDate);
        showsCard.appendChild(showsDateLabel);
        showsCard.appendChild(showsVenueLabel);
        showsCard.appendChild(showsVenue);
        showsCard.appendChild(showsLocationLabel);
        showsCard.appendChild(showsLocation);
        showsCard.appendChild(buyNowButton);
        showsContainer.appendChild(showsCard);


        
    }
    
}
addShows()