import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get("urleazeaz");
    return response.data.results;
  }
}
