import s from "./style.module.css";

export function TVShowList(props) {
  return (
    <>
      <div className={s.title}>You'll probably like:</div>
      <div className={s.list}></div>
    </>
  );
}
