import axios from "axios";
import { API_BASE_URL } from "../../../constants";
import { getAllProducts } from "../../slices/productSlice";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${API_BASE_URL}/products`);

    console.log({ data });

    dispatch(getAllProducts(data));
  } catch (error) {
    console.log({ error });
  }
}

