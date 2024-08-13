import './nav.scss';
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__link--side">
        LOGO
      </NavLink>

      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            HOME
          </NavLink>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            ABOUT
          </a>
        </li>
        <li className="nav__item">
          <a href="/team" className="nav__link">
            TEAM
          </a>
        </li>
        <li className="nav__item">
          <NavLink to="/favourites" className="nav__link">
            FAVOURITES
          </NavLink>
        </li>
      </ul>

      <NavLink to="/" className="nav__link--side">
        CONTACT FORM
      </NavLink>
    </nav>
  );
};
