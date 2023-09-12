import { StarFill, StarHalf, Star as StartEmpty } from "react-bootstrap-icons";

export function FiveStarRating(props) {
  return (
    <div>
      <StarFill />
      <StarFill />
      <StarFill />
      <StarHalf />
      <StartEmpty />
    </div>
  );
}
