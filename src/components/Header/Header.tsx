import "./Header.scss";
import { Nav } from "../Nav";

export const Header = () => {
  return (
    <header className="header">
      <Nav />
      <div className="header__top">
        <h1 className="header__title">dive deep in to the future</h1>
          <img className="header__image" src="/rocket-image.png"></img>
      </div>
      <div className="header__bottom">
        <div className="header__icon"></div>
        <div className="header__line"></div>
      </div>
    </header>
  );
};
