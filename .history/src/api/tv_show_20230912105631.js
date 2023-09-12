import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "";
export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get("urleazeaz");
    return response.data.results;
  }
}
