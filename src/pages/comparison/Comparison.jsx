import React from "react";
import style from "./Comparison.module.css";
import ComparisonSvg from "../../assets/comparison-icon.svg?react";

import api from "../../api/Api";
import Select from "react-select";

const Comparison = () => {
  const [foodsOptions, setFoodsOptions] = React.useState([]);
  const [food1Selected, setFood1Selected] = React.useState();
  const [food2Selected, setFood2Selected] = React.useState();
  const [foodData1, setFoodData1] = React.useState();
  const [foodData2, setFoodData2] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getAllFoods() {
      const { responseObject } = await api.getAllFoods();
      const foods = responseObject.data.data.getAllFood;
      const map = foods.map((categoria) => {
        return {
          value: categoria.id,
          label: categoria.name,
        };
      });

      setFoodsOptions(map);
    }
    getAllFoods();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(food1Selected);
    console.log(food2Selected);

    const { responseObject: responseObject1 } = await api.getFoodDataById(
      food1Selected
    );
    const foodData1 = responseObject1.data.data.getFoodById;
    const { responseObject: responseObject2 } = await api.getFoodDataById(
      food2Selected
    );
    const foodData2 = responseObject2.data.data.getFoodById;
    setFoodData1(foodData1);
    setFoodData2(foodData2);
  }

  if (loading) return <h1>Carregando...</h1>;
  return (
    <section className={style.comparisonSection}>
      <h1 className={`${style.comparisonTitle} display-1`}>Comparação</h1>
      <h2 className={`${style.comparisonSubTitle} heading-3`}>
        Compare dois alimentos.
      </h2>
      <form className={style.comparisonForm} onSubmit={(e) => handleSubmit(e)}>
        <div
          className={`${style.comparisonSelectContainer} ${style.comparisonSelectCategoria}`}
        >
          <label
            htmlFor="categoriaSelect"
            className={`${style.comparisonSelectLabel} label-1`}
          >
            Food 1
          </label>
          <Select
            className={`${style.comparisonSelect} label-1`}
            id="categoriaSelect"
            name="categoriaSelect"
            placeholder="Selecione uma categoria"
            options={foodsOptions}
            onChange={(choice) => setFood1Selected(choice.value)}
          />
        </div>
        <div
          className={`${style.comparisonSelectContainer} ${style.comparisonSelectFood}`}
        >
          <label
            htmlFor="foodSelect"
            className={`${style.comparisonSelectLabel} label-1`}
          >
            Food 2
          </label>
          <Select
            className={`${style.comparisonSelect} label-1`}
            id="foodSelect"
            name="foodSelect"
            options={foodsOptions}
            placeholder="Selecione uma comida"
            onChange={(choice) => setFood2Selected(choice.value)}
            isDisabled={foodsOptions.length === 0 ? true : false}
          />
        </div>
        <button
          className={`${style.comparisonFormButton} cta-medium`}
          type="submit"
          disabled={!food1Selected && !food2Selected ? true : false}
        >
          Pesquisar
        </button>
      </form>
      {foodData1 && foodData2 && (
        <div className={style.comparisonTableContainer}>
          <table>
            <tr>
              <th
                className={`${style.comparisonTableTitle} label-1`}
                colSpan={"2"}
              >
                {foodData1.name}
              </th>
            </tr>
            <tr>
              <th></th>
              <th className={`${style.data} label-1`}>100 g</th>
            </tr>
            <tr>
              <td className="label-1">Valor Energético (Kcal)</td>
              <td className={`${style.data} label-1`}>
                {foodData1.nutrients.kcal || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Carboidratos (g)</td>
              <td className={`${style.data} label-1`}>
                {foodData1.nutrients.carbohydrates || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Proteínas (g)</td>
              <td className={`${style.data} label-1`}>
                {foodData1.nutrients.protein || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Fibras alimentares (g)</td>
              <td className={`${style.data} label-1`}>
                {foodData1.nutrients.dietaryFiber || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Sódio (mg)</td>
              <td className={`${style.data} label-1`}>
                {foodData1.nutrients.sodium || "0"}
              </td>
            </tr>
          </table>
          <ComparisonSvg className={style.comparisonIcon} />
          <table>
            <tr>
              <th
                className={`${style.comparisonTableTitle} label-1`}
                colSpan={"2"}
              >
                {foodData2.name}
              </th>
            </tr>
            <tr>
              <th></th>
              <th className={`${style.data} label-1`}>100 g</th>
            </tr>
            <tr>
              <td className="label-1">Valor Energético (Kcal)</td>
              <td className={`${style.data} label-1`}>
                {foodData2.nutrients.kcal || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Carboidratos (g)</td>
              <td className={`${style.data} label-1`}>
                {foodData2.nutrients.carbohydrates || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Proteínas (g)</td>
              <td className={`${style.data} label-1`}>
                {foodData2.nutrients.protein || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Fibras alimentares (g)</td>
              <td className={`${style.data} label-1`}>
                {foodData2.nutrients.dietaryFiber || "0"}
              </td>
            </tr>
            <tr>
              <td className="label-1">Sódio (mg)</td>
              <td className={`${style.data} label-1`}>
                {foodData2.nutrients.sodium || "0"}
              </td>
            </tr>
          </table>
          <p className="label-1">
            Obs: Todos os dados são referente a quarta edição da tabela TACO
            (Tabela Brasileira de Composição de Alimentos)
          </p>
        </div>
      )}
    </section>
  );
};

export default Comparison;
