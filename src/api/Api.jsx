import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/graphql",
  timeout: 2000,
  headers: {
    "content-type": "application/json",
  },
});

async function getAllCategories() {
  let responseObject;
  let errorResponse;
  const dataQuery = {
    query: `{getAllCategories {
      id
      name
    }}`,
  };
  try {
    const response = await api.post(``, dataQuery);
    if (response.status !== 200) throw new Error(response);
    responseObject = response;
  } catch (error) {
    // error is handled in catch block
    if (error.response) {
      // status code out of the range of 2xx
      console.log("Data :", error.response);
      console.log("Status :" + error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Error on setting up the request
      console.log("Error", error.message);
    }
    errorResponse = error;
  }
  return { responseObject, errorResponse };
}

async function getFoodListByCategoryId(id) {
  let responseObject;
  let errorResponse;
  const dataQuery = {
    query: `{
      getCategoryById(id: ${id}) {
      foods {
        id
        name
      }
    }}`,
  };
  try {
    const response = await api.post(``, dataQuery);
    if (response.status !== 200) throw new Error(response);
    responseObject = response;
  } catch (error) {
    // error is handled in catch block
    if (error.response) {
      // status code out of the range of 2xx
      console.log("Data :", error.response);
      console.log("Status :" + error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Error on setting up the request
      console.log("Error", error.message);
    }
    errorResponse = error;
  }
  return { responseObject, errorResponse };
}

async function getFoodDataById(id) {
  let responseObject;
  let errorResponse;
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
  try {
    const response = await api.post(``, dataQuery);
    if (response.status !== 200) throw new Error(response);
    responseObject = response;
  } catch (error) {
    // error is handled in catch block
    if (error.response) {
      // status code out of the range of 2xx
      console.log("Data :", error.response);
      console.log("Status :" + error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Error on setting up the request
      console.log("Error", error.message);
    }
    errorResponse = error;
  }
  return { responseObject, errorResponse };
}

async function getAllFoods(id) {
  let responseObject;
  let errorResponse;
  const dataQuery = {
    query: `{
      getAllFood {
        id
        name
      }
    }`,
  };
  try {
    const response = await api.post(``, dataQuery);
    if (response.status !== 200) throw new Error(response);
    responseObject = response;
  } catch (error) {
    // error is handled in catch block
    if (error.response) {
      // status code out of the range of 2xx
      console.log("Data :", error.response);
      console.log("Status :" + error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Error on setting up the request
      console.log("Error", error.message);
    }
    errorResponse = error;
  }
  return { responseObject, errorResponse };
}

export default {
  getAllCategories,
  getFoodListByCategoryId,
  getFoodDataById,
  getAllFoods,
};
