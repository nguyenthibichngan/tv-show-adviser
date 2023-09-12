import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import { useEffect } from "react";
const MAX_TITLE_CHAR = 20;

export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };

  useEffect(() => console.log(tvShow.name.length));
  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow}
      </div>
    </div>
  );
}