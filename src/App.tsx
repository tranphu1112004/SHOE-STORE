import { useRoutes } from "react-router-dom";
import "./App.css";
import LayoutCilent from "./layout/client/LayoutCilent";
import Home from "./views/pages/Home/Home";
import ProductList from "./views/pages/ProductList/ProductList";
import DetailProduct from "./views/pages/DetailProduct/DetailProduct";
import Checkout from "./views/pages/Checkout/Checkout";

function App() {
  const Router = useRoutes([
    {
      path: "",
      element: <LayoutCilent />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "listproduct",
          element: <ProductList/>,
        },
        {
          path: "detailProduct",
          element: <DetailProduct />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        
      ],
    },
  ]);

  return Router;
}

export default App;
