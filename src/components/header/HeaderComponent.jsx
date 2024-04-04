import React from "react";
import style from "./HeaderComponent.module.css";
const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <h1 className={`${style.headerTitle} heading-2`}>CN</h1>
      <nav>
        <ul>
          <li className="cta-medium">Pesquiasar</li>
          <li className="cta-medium">Comparar</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
