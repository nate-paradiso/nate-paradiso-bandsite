const form = document.getElementById("myForm");
const formComments = document.getElementById("formComments");
const formCommentArray = [];

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

function addDataDisplay() {
    formComments.innerHTML = "";

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
    name.classList.add("comment-container__text--name-label");
    name.textContent = formData.name;
    commentTextTimeContainer.appendChild(name);

    const timestamp = new Date().toLocaleString();
    const timestampTag = document.createElement("p");
    timestampTag.classList.add("comment-container__text--time-label");
    timestampTag.textContent = timestamp;
    commentTextTimeContainer.appendChild(timestampTag);

    const comment = document.createElement("p");
    comment.classList.add("comment-container__text--comment");
    comment.textContent = formData.comment;
    commentTextContainer.appendChild(comment);



    formComments.appendChild(commentContainer)
  });

}
