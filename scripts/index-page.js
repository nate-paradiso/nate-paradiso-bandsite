const form = document.getElementById("myForm");
const formComments = document.getElementById("formComments");
const formCommentArray = [
  {
    name: "Mile Acosta",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timeStamp: "02/17/2021",
  },
  {
    name: "Emilie Beach",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    timeStamp: "01/09/2021",
  },
  {
    name: "Connor Walton",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    timeStamp: "12/20/2020",
  },
 
];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    const formData = {
        name, 
        comment,
      
    };

    formCommentArray.push(formData);

    form.reset();
    addDataDisplay();
});

function loadComments() {
  formCommentArray.forEach((formData) => {

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

    const timeStamp = new Date().toLocaleDateString();
    const timeStampTag = document.createElement("p");
    timeStampTag.classList.add("comments-container__text--time-label");
    timeStampTag.textContent = timeStamp;
    commentTextTimeContainer.appendChild(timeStampTag);

    const comment = document.createElement("p");
    comment.classList.add("comments-container__text--comment");
    comment.textContent = formData.comment;
    commentTextContainer.appendChild(comment);



    formComments.appendChild(commentContainer)
  });
}
loadComments()

function addDataDisplay() {
    formComments.innerHTML = "";
    formCommentArray.sort();
    loadComments();
  

}
