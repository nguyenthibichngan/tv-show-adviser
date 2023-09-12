import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar(props) {
  return (
    <div>
      <SearchIcon size={27} className={s.icon} />
      <input className={s.input} type="text" placeholder="Search" />
    </div>
  );
}
