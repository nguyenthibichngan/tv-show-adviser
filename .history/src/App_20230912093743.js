import s from "./style.module.css";

function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4"></div>
        </div>
      </div>
      <div className={s.tv_show_detail}></div>
      <div className={s.recommended_tv_shows}></div>
    </div>
  );
}

export default App;
