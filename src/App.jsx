import "./App.css";
import AppRoutes from "./AppRoutes";
import { NextUIProvider } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAll } from "./redux/slices/productSlice";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  return (
    <NextUIProvider>
      <AppRoutes />
    </NextUIProvider>
  );
}

export default App;
