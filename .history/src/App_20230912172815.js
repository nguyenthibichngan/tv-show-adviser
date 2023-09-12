import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv_show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
// import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import logoImmg from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImmg}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-6">
            {/* <input style={{ width: "100%" }} type="text" /> */}
            <SearchBar />
          </div>
        </div>
      </div>

      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>

      <div className={s.recommended_shows}>
        {currentTVShow && (
          <TVShowList
            onClick={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
