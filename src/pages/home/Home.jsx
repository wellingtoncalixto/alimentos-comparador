import React from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import SearchSvg from "../../assets/search-icon.svg?react";
import ComparisonSvg from "../../assets/comparison-icon.svg?react";
import HealthyFoodSvg from "../../assets/healthy-food-bro.svg?react";

const Home = () => {
  return (
    <section className={style.homeContainer}>
      <div className={style.homeContent}>
        <h1 className={`${style.homeTitle} display-1`}>
          Comparador de Nutrientes
        </h1>
        <HealthyFoodSvg className={style.homeBackground} />
        <h4 className={`${style.homeSubTitle} heading-3`}>
          Pesquise e Compare as informações nutricionais dos alimentos para
          alcançar seus objetivos
        </h4>
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
            <ComparisonSvg
              className={`${style.icon} ${style.iconComparison}`}
            />
            <p className="cta-medium">Comparar</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
