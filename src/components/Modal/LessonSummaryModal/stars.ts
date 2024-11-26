import star from "../../../assets/photos/full-star.svg";
import emptyStar from "../../../assets/photos/empty-star.svg";

export const getStars = (atempts: number) => {
  const starts = ["", "", ""];

  if (atempts <= 2) {
    starts[0] = star;
    starts[1] = star;
    starts[2] = star;
  }

  if (atempts <= 4) {
    starts[0] = star;
    starts[1] = star;
    starts[2] = emptyStar;
  }

  if (atempts <= 6) {
    starts[0] = star;
    starts[1] = emptyStar;
    starts[2] = emptyStar;
  }

  if (atempts > 6) {
    starts[0] = emptyStar;
    starts[1] = emptyStar;
    starts[2] = emptyStar;
  }

  return starts;
};
