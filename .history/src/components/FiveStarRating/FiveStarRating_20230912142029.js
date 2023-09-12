import { StarFill, StarHalf, Star as StartEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Daclare
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
