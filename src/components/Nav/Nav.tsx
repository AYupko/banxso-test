import { useState } from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import { Warning } from "../Warning";

export const Nav = () => {
  const [warning, setWarning] = useState(false);

  const handleWarning = () => {
    setWarning(true);

    setTimeout(() => {
      setWarning(false);
    }, 2000);
  };

  return (
    <>
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
          <li className="nav__item" onClick={handleWarning}>
            <NavLink to="#" className="nav__link">
              ABOUT
            </NavLink>
          </li>
          <li className="nav__item" onClick={handleWarning}>
            <NavLink to="#" className="nav__link">
              TEAM
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/favourites" className="nav__link">
              FAVOURITES
            </NavLink>
          </li>
        </ul>

        <NavLink to="#" className="nav__link--side" onClick={handleWarning}>
          CONTACT FORM
        </NavLink>
      </nav>

      {warning && <Warning />}
    </>
  );
};
