const myApiKey = "NatesKey";
const myApiUrl = "https://project-1-api.herokuapp.com/"

const fetchApiData = async () => {
    try {
        const response = await axios.get(`${myApiUrl}?api_key=${myApiKey}`);
        console.log(response.data);
    }
    catch(error) {
    console.log("bandsite API Error", error)
    }
}