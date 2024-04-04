import React from "react";
import style from "./TableComponent.module.css";

const TableComponent = ({ data }) => {
  return (
    <table className={style.table}>
      <tr>
        <th className={`${style.tableTitle} label-1`} colSpan={"2"}>
          {data.name}
        </th>
      </tr>
      <tr>
        <th></th>
        <th className={`${style.tableResult} ${style.tableBorderLeft} label-1`}>
          100 g
        </th>
      </tr>
      <tr>
        <td className="label-1">Valor Energético</td>
        <td
          className={`${style.tableResult} ${style.tableBorderLeft}  label-1`}
        >
          <p>
            {data.nutrients.kcal || "0"}Kcal = {data.nutrients.kJ || "0"}Kj
          </p>
        </td>
      </tr>
      <tr>
        <td className="label-1">Carboidratos</td>
        <td className={`${style.tableResult} ${style.tableBorderLeft} label-1`}>
          <p>{data.nutrients.carbohydrates || "0"}g</p>
        </td>
      </tr>
      <tr>
        <td className="label-1">Proteínas</td>
        <td className={`${style.tableResult} ${style.tableBorderLeft} label-1`}>
          <p>{data.nutrients.protein || "0"}g</p>
        </td>
      </tr>
      <tr>
        <td className="label-1">Fibras alimentares</td>
        <td className={`${style.tableResult} ${style.tableBorderLeft} label-1`}>
          <p>{data.nutrients.dietaryFiber || "0"}g</p>
        </td>
      </tr>
      <tr>
        <td className="label-1">Sódio </td>
        <td className={`${style.tableResult} ${style.tableBorderLeft} label-1`}>
          <p>{data.nutrients.sodium || "0"}mg</p>
        </td>
      </tr>
    </table>
  );
};

export default TableComponent;
