import React from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import SearchSvg from "../../assets/search-icon.svg?react";
import ComparisonSvg from "../../assets/comparison-icon.svg?react";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.homeContent}>
        <h1 className={`${style.homeTitle} display-1`}>
          Bem vindo ao Comparador de Alimentos
        </h1>
        <div className={style.homeContainerCard}>
          <NavLink
            to="/search"
            className={`${style.homeCard} ${style.homeSearch}`}
          >
            <SearchSvg className={style.icon} />
            <p className="cta-medium">Pesquisar</p>
          </NavLink>
          <NavLink
            to="/comparison"
            className={`${style.homeCard} ${style.homeComparison}`}
          >
            <ComparisonSvg className={style.icon} />
            <p className="cta-medium">Comparar</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
