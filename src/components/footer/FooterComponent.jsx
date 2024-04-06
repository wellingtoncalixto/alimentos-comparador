import React from "react";
import style from "./FooterComponent.module.css";
const FooterComponent = () => {
  return (
    <footer>
      <p className={`${style.footerMessage} heading-3`}>
        Desenvolvido por{" "}
        <span className={style.boldMessage}>Wellington Calixto</span> |{" "}
        <span>2024 todos os direitos reservados</span>
      </p>
    </footer>
  );
};

export default FooterComponent;
