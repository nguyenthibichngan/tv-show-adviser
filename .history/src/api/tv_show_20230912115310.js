import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=9566da690f3a8df7ea2b1980a0c5b8a2";

export class TVShowAPI {
  static async fetchPopulars() {
    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    // console.log(response.data.results);
    return FAKE_POPULARS;
  }
}
