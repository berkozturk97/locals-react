import axios from "axios";
import qs from "qs";
import _ from "lodash";

export const fetchProducts = async ({query, limitless}) => {
  const clonnedQuery = _.cloneDeep(query);

  if(limitless === true){
    delete clonnedQuery._limit;
    delete clonnedQuery._page;
  }

  const queryString = qs.stringify(clonnedQuery);
  return axios
    .get(`${process.env.REACT_APP_API_URL}/products?${queryString}`)
    .then((response) => {
      const totalProductCount = Number(response.headers["x-total-count"]);
      return { products: response.data, totalProductCount }
    })
    .catch((error) => error);
}

