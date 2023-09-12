import s from "./style.module.css";
import img from "../../assets/images/logo.jpg";

export function Logo({ title, subtitle, img }) {
  return (
    <>
      <div>
        <img src={img} alt="Logo" />
      </div>
    </>
  );
}
