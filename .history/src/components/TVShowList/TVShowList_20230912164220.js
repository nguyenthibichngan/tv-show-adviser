import { useEffect } from "react";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList }) {
  useEffect(() => console.log("tvShowList", tvShowList));

  return (
    //jsx
    <div></div>
  );
}
