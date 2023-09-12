import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";

export class TVShowAPI {
  static async fetchPopulars() {
    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    // console.log(response.data.results);
    return FAKE_POPULARS;
  }
}
