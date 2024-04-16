import React from "react";
import style from "./LoadingComponent.module.css";

import Brocolis from "../../assets/brocolis.png";
import Cenoura from "../../assets/cenoura.png";
import Jantar from "../../assets/jantar.png";
import Pimentao from "../../assets/pimento.png";
import Salada from "../../assets/salada.png";

const LoadingComponent = () => {
  const [step, setStep] = React.useState(0);

  function renderSwitch() {
    switch (step) {
      case 0:
        return (
          <img
            className={`${style.loadingIcon} ${
              step === 0 ? style.loadingIconActive : ""
            }`}
            src={Brocolis}
            alt="icone de um brocolis"
          />
        );
      case 1:
        return (
          <img
            className={`${style.loadingIcon} ${
              step === 1 ? style.loadingIconActive : ""
            }`}
            src={Jantar}
            alt="icone de um prato de jantar"
          />
        );
      case 2:
        return (
          <img
            className={`${style.loadingIcon} ${
              step === 2 ? style.loadingIconActive : ""
            }`}
            src={Pimentao}
            alt="icone de um pimentao"
          />
        );
      case 3:
        return (
          <img
            className={`${style.loadingIcon} ${
              step === 3 ? style.loadingIconActive : ""
            }`}
            src={Salada}
            alt="icone de uma tigela de salada"
          />
        );
      default:
        return (
          <img
            className={style.loadingIcon}
            src={Brocolis}
            alt="icone de um brocolis"
          />
        );
    }
  }

  React.useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (step < 3) {
        setStep((step) => step + 1);
        return;
      }
      if (step === 3) {
        setStep(0);
        return;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [step]);

  return <div className={style.loadingContainer}>{renderSwitch()}</div>;
};

export default LoadingComponent;
