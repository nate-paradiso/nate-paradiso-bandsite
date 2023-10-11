const apiKey = "?api_key=64a4eaa5-fa50-4983-9f6e-be86df125399";
const baseURL = "https://project-1-api.herokuapp.com";


// class BandSiteAPI {
// constructor (apiKey) {
//     this.apiKey = apiKey;
    

const getComments = async () => {
    try {
        const commentData = await axios.get(`${baseURL}/comments${apiKey}`);
        const commentDomDataArray = commentData.data.map(comment => {
            return {
                name: comment.name,
                comment: comment.comment,
                timestamp: comment.timestamp
            };
        });

        // console.log(commentDomDataArray);
    }
    catch(error) {
    console.log(error)
    }
}

getComments();
const commentDomDataArray = [];
export default commentDomDataArray;

// let formCommentArray = []
// formCommentArray.forEach(comment => {
//     document.textContent(commentData.data[0].name);
//     document.textContent(commentData.data[0].comment);
//     document.textContent(commentData.data[0].timestamp);

// });
// }


// const getShows = async () => {
//     try {
//         const showDates = await axios.get(`${baseURL}/showdates${apiKey}`);
//         console.log(showDates.data);
//     }
//     catch(error) {
//     console.log(error)
//     }
// }
// getShows();

// const postComment = async () => {
//     try {
//         const comment = await axios.post(`${baseURL}/comment${apiKey}`, COMMENTDATA);
//         console.log(comment.data);
//     }
//     catch(error) {
//     console.log(error)
//     }
// }



