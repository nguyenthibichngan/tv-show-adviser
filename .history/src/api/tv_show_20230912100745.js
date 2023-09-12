import axios from "axios";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get("urleazeaz");
    return response.data.results;
  }
}
