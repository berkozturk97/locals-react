import axios from "axios";
import qs from "qs";

export const fetchProducts = async ({query}) => {
  const queryString = qs.stringify(query);
  return axios
    .get(`${process.env.REACT_APP_API_URL}/products?${queryString}`)
    .then((response) => response.data)
    .catch((error) => error);
}

