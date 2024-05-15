import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/graphql",
  timeout: 2000,
  headers: {
    "content-type": "application/json",
  },
});

async function getAllCategories() {
  const dataQuery = {
    query: `{getAllCategories {
      id
      name
    }}`,
  };

  const { data } = await api.post(``, dataQuery);

  return { data };
}

async function getFoodListByCategoryId(id) {
  const dataQuery = {
    query: `{
      getCategoryById(id: ${id}) {
      foods {
        id
        name
      }
    }}`,
  };

  const { data } = await api.post(``, dataQuery);

  return { data };
}

async function getFoodDataById(id) {
  const dataQuery = {
    query: `{
      getFoodById(id: ${id}) {
        id
        name
        nutrients {
          carbohydrates
          protein
          sodium
          dietaryFiber
          kcal
          kJ
        }
      }}`,
  };

  const { data } = await api.post(``, dataQuery);

  return { data };
}

async function getAllFoods() {
  const dataQuery = {
    query: `{
      getAllFood {
        id
        name
      }
    }`,
  };

  const { data } = await api.post(``, dataQuery);

  return { data };
}

export default {
  getAllCategories,
  getFoodListByCategoryId,
  getFoodDataById,
  getAllFoods,
};
