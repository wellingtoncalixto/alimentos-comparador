import React from "react";
import style from "./LoadingSpinerComponent.module.css";

const LoadingSpinerComponent = ({ width = 20, heigth = 20 }) => {
  return (
    <div
      className={style.spiner}
      style={{ width: `${width}px`, height: `${heigth}px` }}
    ></div>
  );
};

export default LoadingSpinerComponent;
