import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList(props) {
  return (
    <>
      <div className={s.title}>You'll probably like:</div>
      <div className={s.list}>
        {TVShowList.map((tvShow) => {
          return (
            <TVShowListItem
              tvShow={tvShow}
              onClick={() => console.log("todo")}
            />
          );
        })}
      </div>
    </>
  );
}
