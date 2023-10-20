import {BandSiteAPI} from "./band-site-api.js"
const nateAPIKey = "?api_key=64a4eaa5-fa50-4983-9f6e-be86df125399";
const nateBandSiteAPI = new BandSiteAPI(nateAPIKey);
let formCommentArray = [];


// new time format--- this was tough....
function formatTime (timestamp) {
  const date = new Date(timestamp);
  console.log(date)
  return date.toLocaleDateString();
}

// better!
// const formatTimeFromNow = (timestamp) => {
//   const timeNow = Date.now();
//   const secondsAgo = Math.floor((timeNow - timestamp) / 1000);
//   if (secondsAgo < 60) {
//       return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
//   }
//   const minutesAgo = Math.floor(secondsAgo / 60);
//   if (minutesAgo < 60) {
//       return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
//   }
//   const hoursAgo = Math.floor(minutesAgo / 60);
//   if (hoursAgo < 24) {
//       return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
//   }
//   const daysAgo = Math.floor(hoursAgo / 24);
//   if (daysAgo < 7) {
//       return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
//   }
//   const weeksAgo = Math.floor(daysAgo / 7);
//   if (weeksAgo < 4) {
//       return `${weeksAgo} week${weeksAgo !== 1 ? 's' : ''} ago`;
//   }
//   const monthsAgo = Math.floor(daysAgo / 30);
//   if (monthsAgo < 12) {
//       return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
//   }
//   const yearsAgo = Math.floor(monthsAgo / 12);
//   return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
//   };




// we need to wait for the data for each instance of the api so we put it in a async function. 
async function waitForComments () {
  try {
    const commentAPIArray = await nateBandSiteAPI.getComments();

    formCommentArray = commentAPIArray;
    sortingArray();
    displayComment();

  }catch(error) {
    console.error(error);
}
}
waitForComments();

const form = document.getElementById("myForm");
const formComments = document.getElementById("formComments");



// adds event submit button, pushing new data in the array
form.addEventListener("submit", async function (event) {
   
      // refreshes the page, use with a submit event -  maybe best to use with all events 
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Validates the form has text with the submit event handler.  
    // The function is passed in here but is at the
    // bottom of the page
    if (formValidation()){
    const formData = {
        name, 
        comment,
    };
    const receiveComment = await nateBandSiteAPI.postComment(formData);
    formCommentArray.push(receiveComment);

    // resets the form
    // calls the function addDataDisplay which sorts the displays the data
    addDataDisplay();
  }
  form.reset();
});



// sorts array by date on default comments with newest on top
function sortingArray() {
formCommentArray.sort(function(a, b) {
  let aDate = new Date(a.timestamp);
  let bDate = new Date(b.timestamp);
  return aDate - bDate;
});
};


// builds new elements for display in new array
function displayComment() {
  formCommentArray.map((formData) => {

    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comments-container");

    const avatar = document.createElement("div");
    avatar.classList.add("comments-container__avatar");
    commentContainer.appendChild(avatar)
 
    const commentAllText = document.createElement("div");
    commentAllText.classList.add("comments-container__all-text");
    commentContainer.appendChild(commentAllText)
    
    const commentTextTimeContainer = document.createElement("div");
    commentTextTimeContainer.classList.add("comments-container__text--time");
    commentAllText.appendChild(commentTextTimeContainer)
    
    const commentTextContainer = document.createElement("div");
    commentTextContainer.classList.add("comments-container__text");
    commentAllText.appendChild(commentTextContainer)

    const name = document.createElement("p");
    name.classList.add("comments-container__text--name-label");
    name.textContent = formData.name;
    commentTextTimeContainer.appendChild(name);

    const timeStampTag = document.createElement("p");
    timeStampTag.classList.add("comments-container__text--time-label");

    // calling formatTime function here as its being displayed.
    timeStampTag.textContent = formatTime(formData.timestamp);
    commentTextTimeContainer.appendChild(timeStampTag);

    const comment = document.createElement("p");
    comment.classList.add("comments-container__text--comment");
    comment.textContent = formData.comment;
    commentTextContainer.appendChild(comment);

    formComments.prepend(commentContainer);
  });
}


// runs sort function and add new comments function
function addDataDisplay() {
  // wipes all HTML elements 
    formComments.innerHTML = "";
    sortingArray();
    displayComment();
}

// function to validate the form has text before it is submitted
function formValidation(){
  let formName = document.forms["myForm"]["name"].value;
  let formComment = document.forms["myForm"]["comment"].value;
  if ( formName == "" || formComment == "") {
    alert("Name and comment must be filled out");
    return false;
  }else 
  return true;
}
