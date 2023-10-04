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
      title: "Awful site!",
      content: "This is really a terrible site I am so disgusted by you!",
      profile_pic: "./patrick.jpg"
    },
  ]
function addShows(){
    // const showsCard = document.querySelector(".shows__container");
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
        showsDate.innerText = shows[i].date
        showsCard.appendChild(showsDate);

        
    }
}
setTimeout(
    addShows,
    2000
  )