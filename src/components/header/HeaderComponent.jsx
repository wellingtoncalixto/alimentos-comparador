import React from "react";
import style from "./HeaderComponent.module.css";
import { NavLink } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li className={style.headerNavLinkStart}>
            <NavLink className={`${style.headerNavLink} `} to="/">
              <h1 className={`${style.headerTitle} heading-2`}>CN</h1>
            </NavLink>
          </li>
          <li className={style.headerNavLinkEnd}>
            <NavLink
              className={`${style.headerNavLink} ${style.headerNavLinkHover}`}
              to="/search"
            >
              <p className="cta-medium">Pesquisar</p>
            </NavLink>
          </li>
          <li>
            <p> | </p>
          </li>
          <li className={style.headerNavLinkEnd}>
            <NavLink
              className={`${style.headerNavLink} ${style.headerNavLinkHover}`}
              to="/comparison"
            >
              <p className="cta-medium"> Comparar</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
