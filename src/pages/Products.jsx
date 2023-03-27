import { Grid } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../components/Product/Product";
import { fetchAllProducts } from "../redux/actions/products";

const Products = () => {
  const { list } = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Grid.Container gap={2} justify="flex-start">
      {list.map((product) => (
        <Grid xs={6} sm={3} key={product._id}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Products;
