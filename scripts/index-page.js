import {BandSiteAPI} from "./band-site-api.js"
const nateAPIKey = "?api_key=64a4eaa5-fa50-4983-9f6e-be86df125399";
const nateBandSiteAPI = new BandSiteAPI(nateAPIKey);
let formCommentArray = []

async function waitForComments () {
  try {
    // console.log(await nateBandSiteAPI.getComments());
    const commentAPIArray = await nateBandSiteAPI.getComments();
    formCommentArray = commentAPIArray;
    // console.log(formCommentArray)
    displayComment();

  }catch(error) {
    console.error(error);

}
}
waitForComments()

const form = document.getElementById("myForm");
const formComments = document.getElementById("formComments");

// adds event submit button, pushing new data in the array
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const timeStamp = new Date();

    const formData = {
        name, 
        comment,
        timeStamp: timeStamp.toLocaleDateString(),
    };

    formCommentArray.push(formData);

    form.reset();
    addDataDisplay();
});

// sorts array by date on default comments with newest on top
function sortingArray() {
formCommentArray.sort(function(a, b) {
  let aDate = new Date(a.timeStamp);
  let bDate = new Date(b.timeStamp);
  return aDate - bDate;
});
};
sortingArray();

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
    timeStampTag.textContent = formData.timeStamp;
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
    formComments.innerHTML = "";
    sortingArray();
    displayComment();
}