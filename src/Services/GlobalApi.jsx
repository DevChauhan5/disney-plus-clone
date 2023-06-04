import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_API_KEY;

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
export default {
    getTrendingVideos
}