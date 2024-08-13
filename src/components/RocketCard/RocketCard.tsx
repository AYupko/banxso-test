import { Rocket } from "../../types/types";
import { Link } from "react-router-dom";

import "./RocketCard.scss";
import { getTechParams } from "../../utils/getTechParams";
import { RocketParams } from "../RocketParams";

type Props = {
  rocket: Rocket;
};

export const RocketCard: React.FC<Props> = ({ rocket }) => {
  const {
    id,
    flickr_images,
    name,
  } = rocket;

  const [image] = flickr_images;
  const URL = `/rocket/${id}`;
  const techParams = getTechParams(rocket).slice(0, 5);

  return (
    <article className="rocketCard">
      <Link to={URL}>
        <img className="rocketCard__image" src={image} alt={`rocket-id${id}`} />
        <p className="rocketCard__title">{name}</p>
        <RocketParams techParams={techParams} />
      </Link>
    </article>
  );
};
