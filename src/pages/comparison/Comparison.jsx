import React from "react";
import style from "./Comparison.module.css";
import ComparisonSvg from "../../assets/comparison-icon.svg?react";
import OptionsSvg from "../../assets/options.svg?react";

import api from "../../api/Api";
import Select from "react-select";
import FooterComponent from "../../components/footer/FooterComponent";
import TableComponent from "../../components/table/TableComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import LoadingComponent from "../../components/loading/LoadingComponent";

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

  if (loading) return <LoadingComponent />;
  return (
    <>
      <HeaderComponent />
      <section className={style.comparisonSection}>
        <OptionsSvg className={style.comparisonSvgOption} />
        <h2 className={`${style.comparisonSubTitle} heading-3`}>
          Compare os dados nutricionais de 2 alimentos para ver qual se encaixa
          melhor na sua dieta.
        </h2>
        <form
          className={style.comparisonForm}
          onSubmit={(e) => handleSubmit(e)}
        >
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
              id="foodSelect"
              name="foodSelect"
              options={foodsOptions}
              placeholder="Selecione uma comida"
              onChange={(choice) => setFood2Selected(choice.value)}
            />
          </div>
          <button
            className={`${style.comparisonFormButton} cta-medium`}
            type="submit"
            disabled={!food1Selected || !food2Selected ? true : false}
          >
            Comparar
          </button>
        </form>
        {foodData1 && foodData2 && (
          <>
            <span className={style.comparisonDiviser}></span>
            <div className={style.comparisonResultContainer}>
              <TableComponent
                data={foodData1}
                className={style.comparisonTable1}
              />
              <ComparisonSvg className={style.comparisonSvgIcon} />
              <TableComponent
                data={foodData2}
                className={style.comparisonTable2}
              />
              <p className={`${style.resultMessage} label-1`}>
                Obs: Todos os dados são referente a quarta edição da tabela TACO
                (Tabela Brasileira de Composição de Alimentos)
              </p>
            </div>
          </>
        )}
      </section>
      <FooterComponent />
    </>
  );
};

export default Comparison;
