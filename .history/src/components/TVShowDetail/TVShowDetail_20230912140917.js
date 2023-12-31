import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating}>
        <span>{tvShow.vote_average / 2}/5</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
