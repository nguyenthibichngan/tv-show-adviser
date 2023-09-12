import s from "./style.module.css";

export function Logo({ title, subtitle, img }) {
  return (
    <>
      <div>
        <img src={img} alt="Logo" />
      </div>
    </>
  );
}
