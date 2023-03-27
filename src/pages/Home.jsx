import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../redux/actions/products";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return <div>Hola mundo</div>;
};

export default Home;
