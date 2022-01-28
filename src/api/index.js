import axios from "axios";

export const fetchProducts = () =>
  axios
    .get(`${process.env.REACT_APP_API_URL}/products`)
    .then((response) => response.data)
    .catch((error) => error);
