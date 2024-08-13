import React from "react";
import cn from "classnames";

import "./Button.scss";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Rocket } from "../../types/types";
import { actions } from "../../store/rocketSlice";

type Props = {
  rocket: Rocket;
};

export const Button: React.FC<Props> = ({ rocket }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.rockets);
  const isFavorite = favorites.includes(rocket);

  const text = isFavorite ? "Remove from favourites" : "Add to favourites";

  const handleClick = () => {
    if (isFavorite) {
      dispatch(actions.removeFavourite(rocket.id));
    } else {
      dispatch(actions.addFavourite(rocket));
    }
  };

  return (
    <button
      className={cn("button", { "button--added": isFavorite })}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
