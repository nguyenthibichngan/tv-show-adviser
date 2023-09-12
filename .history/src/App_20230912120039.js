import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv_show";
import s from "./style.module.css";

function App() {
  const [currentTVShow, setCUrrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.lenght > 0) {
      setCUrrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow);

  return (
    <div className={s.main_container} style={{ background }}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo here</div>
            <div>subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}></div>
      <div className={s.recommended_tv_shows}></div>
    </div>
  );
}

export default App;
