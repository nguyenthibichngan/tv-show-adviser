import s from "./style.module.css";

export function TVShowDetail(tvShow) {
  return (
    <div>
      <div>{tvShow.name}</div>
      <div>{tvShow.vote_}</div>
      <div>{tvShow.name}</div>
    </div>
  );
}
