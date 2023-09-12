import s from "./style.module.css";
import {SMALL_IMG_COVER_BASE_URL} from "../../config"

export function TVShowListItem({ tvShow }) {
  return <div className={s.container}>
    <img alt={tvShow.name} src={} />
  </div>;
}
