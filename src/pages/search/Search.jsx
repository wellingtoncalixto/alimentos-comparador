import React from "react";
import style from "./Search.module.css";
import SearchInput from "../../components/SearchInput";
import useSearchInput from "../../custom_hooks/useSearchInput";

const Search = () => {
  const categoria = useSearchInput();
  const [comida, setComida] = React.useState({});
  const [categorias, setCategorias] = React.useState([
    {
      value: "categoria 1",
      id: 1,
    },
    {
      value: "categoria 2",
      id: 2,
    },
    {
      value: "categoria 3",
      id: 3,
    },
    {
      value: "categoria 4",
      id: 4,
    },
    {
      value: "categoria 5",
      id: 5,
    },
    {
      value: "categoria 6",
      id: 6,
    },
    {
      value: "categoria 7",
      id: 7,
    },
    {
      value: "categoria 8",
      id: 8,
    },
    {
      value: "categoria 9",
      id: 9,
    },
    {
      value: "categoria 10",
      id: 10,
    },
  ]);

  return (
    <section className={style.searchSection}>
      <h1 className={`${style.searchTitle} display-1`}>Pesquisar</h1>
      <h2 className={`${style.searchSubTitle} heading-3`}>
        Encontre os dados de determido alimimento
      </h2>
      <form action="">
        <SearchInput
          options={categorias}
          searchValue={categoria.value}
          setSearchValue={categoria.setValue}
          error={categoria.error}
          setError={categoria.setError}
          name={"categoria"}
          placeholder="Por favor selecione uma categoria"
        />
        <button>Pesquisar</button>
      </form>
      {/* <table>
        <tr>
          <th className={`${style.searchTableTitle} label-1`} colSpan={"2"}>
            Melancia
          </th>
        </tr>
        <tr>
          <th></th>
          <th className={`${style.data} label-1`}>100 g</th>
        </tr>
        <tr>
          <td className="label-1">Valor Energético (Kcal)</td>
          <td className={`${style.data} label-1`}>130</td>
        </tr>
        <tr>
          <td className="label-1">Carboidratos (g)</td>
          <td className={`${style.data} label-1`}>130</td>
        </tr>
        <tr>
          <td className="label-1">Proteínas (g)</td>
          <td className={`${style.data} label-1`}>130</td>
        </tr>
        <tr>
          <td className="label-1">Gordutas Totais (g)</td>
          <td className={`${style.data} label-1`}>130</td>
        </tr>
        <tr>
          <td className="label-1">Fibras alimentares (g)</td>
          <td className={`${style.data} label-1`}>130</td>
        </tr>
        <tr>
          <td className="label-1">Sódio (mg)</td>
          <td className={`${style.data} label-1`}>130</td>
        </tr>
      </table> */}
      <p className="label-1">
        Obs: Todos os dados são referente a quarta edição da tabela TACO (Tabela
        Brasileira de Composição de Alimentos)
      </p>
    </section>
  );
};

export default Search;
