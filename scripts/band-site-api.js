const nateAPIKey = "?api_key=64a4eaa5-fa50-4983-9f6e-be86df125399";

export class BandSiteAPI {
    constructor (apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";
    }
    getComments = async () => {
        try {
            const commentData = await axios.get(`${this.baseURL}/comments${this.apiKey}`);
            // console.log(commentData.data);
            return commentData.data;
        }
        catch(error) {
            console.error(error);
        }
    }
    getShows = async () => {
        try {
            const showDates = await axios.get(`${this.baseURL}/showdates${this.apiKey}`);
            // console.log(showDates.data);
            return showDates.data;
        }
        catch(error) {
            console.error(error);
        }
    }      
    postComment = async (formData) => {
        try {
            const postComment = await axios.post(`${this.baseURL}/comments${this.apiKey}`, formData);
            // console.log(postComment.data);
            return postComment.data;
        }
        catch(error) {
            console.error(error);
        }
    }
}

















// const postComment = async () => {
//     try {
//         const comment = await axios.post(`${baseURL}/comment${apiKey}`, COMMENTDATA);
//         console.log(comment.data);
//     }
//     catch(error) {
//     console.log(error)
//     }
// }



