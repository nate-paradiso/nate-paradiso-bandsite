const nateAPIKey = "?api_key=64a4eaa5-fa50-4983-9f6e-be86df125399";
import { displayComment } from "./index-page.js";

export class BandSiteAPI {
    constructor (apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";
    }
getComments = async () => {
    try {
        const commentData = await axios.get(`${this.baseURL}/comments${this.apiKey}`);
        return commentData.data;
    }
    catch(error) {
        console.log(error)
    }
}
}
// create this index and call displayComment or map.
async function takeCommentData () {
    try {
        const comments = await nateBandSiteAPI.getComments()
        // not working below.
        const commentsData = comments.map(comment => ({
            name: comment.name,
            comment: comment.comment,
            timeStamp: comment.timeStamp
        
        }));
        console.log(commentsData);
        displayComment(commentsData);
    }
    catch (error){
        console.log(error)
    }
}
const nateBandSiteAPI = new BandSiteAPI(nateAPIKey);
takeCommentData()
// console.log(nateBandSiteAPI.getComments());










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



