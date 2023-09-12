import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList }) {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow, index) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem
                tvShow={tvShow}
                onClick={() => console.log("todo")}
              />
              {console.log(tvShowList)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
