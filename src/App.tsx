import "./App.css";
import { useRoutes } from "react-router-dom";
import LayoutClient from "./layout/client/LayoutCilent";
import LayoutAdmin from "./layout/admin/LayuotAdmin";
import HomeAdmin from "./components/Admin/HomeAdmin";
import ListProduct from "./components/Admin/ListProduct";
import OrderAdmin from "./components/Admin/OderAdmin";
import Statical from "./components/Admin/Statical";
import Voucher from "./components/Admin/Voicher";
import AddProduct from "./components/Admin/AddProduct";
import EditProduct from "./components/Admin/EditProduct";
import ProductContext from "./context/ProductContext";
import ColorContext from "./context/ColorContext";
import SizeContext from "./context/SizeContext";
import BrandContext from "./context/BrandContext";
import ColorDetail from "./components/Admin/ColorDetail";
import CategoryContext from "./context/CategoryContext";
import ProductDetail from "./components/Admin/ProductDetail";
import StoppedProducts from "./components/Admin/StoppedProducts";
import ManagementPage from "./components/Admin/ManagementPage";
import Register from "./components/acc/Register";
import Login from "./components/acc/Login";
import OrderContext from "./context/OrderContext";
import VoucherProvider from "./context/VoucherContext";
import { UserProvider } from "./context/UserContext";
import AccountList from "./components/Admin/AccountList";
import ReviewContext from "./context/ReviewContext";
import Home from "./views/pages/Home/Home";
import ProductList from "./views/pages/ProductList/ProductList";
import Contact from "./views/pages/Contact/Contact";
import Checkout from "./views/pages/Checkout/Checkout";
import Order from "./views/pages/Oder/Oder";
import Cart from "./views/pages/Cart/Cart";
import Introduce from "./views/pages/Introduce/Introduce";
import { ContactProvider } from "./context/ContactContext";
import Content from "./views/pages/Content/Content";
import ContentContext from "./context/ContentContext";
import ListShoes from "./views/pages/shoes/ListShoes";
import TshirtList from "./views/pages/Tshirt/TshirtList";
import ProductDetailuser from "./views/pages/ProductDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import CartPage from "./views/pages/CartPage/CartPage";

function App() {
  const router = useRoutes([
    {
      path: "",
      element: (
        <UserProvider>
          <CartProvider>
            <ReviewContext>
              <ContactProvider>
                <ContentContext>
                  <ProductContext>
                    <VoucherProvider>
                      <OrderContext>
                        <CategoryContext>
                          <BrandContext>
                            <SizeContext>
                              <ColorContext>
                                <LayoutClient />
                              </ColorContext>
                            </SizeContext>
                          </BrandContext>
                        </CategoryContext>
                      </OrderContext>
                    </VoucherProvider>
                  </ProductContext>
                </ContentContext>
              </ContactProvider>
            </ReviewContext>
          </CartProvider>
        </UserProvider>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "introduce", element: <Introduce /> },
        { path: "cart", element: <CartPage/> },
        { path: "shoes", element: <ListShoes /> },
        { path: "product/:id", element: <ProductDetailuser /> },
        { path: "tshirt", element: <TshirtList /> },
        { path: "listitem", element: <ProductList /> },
        { path: "contact", element: <Contact /> },
        { path: "content", element: <Content /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
        { path: "order", element: <Order /> },
        { path: "*", element: <h1>404 Not Found</h1> },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    {
      path: "admin",
      element: (
        <UserProvider>
          <CartProvider>
            <ReviewContext>
              <ContactProvider>
                <ContentContext>
                  <ProductContext>
                    <VoucherProvider>
                      <OrderContext>
                        <CategoryContext>
                          <BrandContext>
                            <SizeContext>
                              <ColorContext>
                                <LayoutAdmin />
                              </ColorContext>
                            </SizeContext>
                          </BrandContext>
                        </CategoryContext>
                      </OrderContext>
                    </VoucherProvider>
                  </ProductContext>
                </ContentContext>
              </ContactProvider>
            </ReviewContext>
          </CartProvider>
        </UserProvider>
      ),
      children: [
        { path: "", element: <HomeAdmin /> },
        { path: "products", element: <ListProduct /> },
        { path: "product/add", element: <AddProduct /> },
        { path: "product/edit/:id", element: <EditProduct /> },
        { path: "products/stopped", element: <StoppedProducts /> },
        
        { path: "checkout", element: <OrderAdmin /> },
        { path: "users", element: <AccountList /> },
        { path: "content", element: <Content /> },
        { path: "statical", element: <Statical /> },
        { path: "voucher", element: <Voucher /> },
        { path: "product/:id", element: <ProductDetail /> },
        { path: "all", element: <ManagementPage /> },
        { path: "color/edit/:id", element: <ColorDetail /> },
        { path: "size/edit/:id", element: <ColorDetail /> },
        { path: "category/edit/:id", element: <ColorDetail /> },
        { path: "brand/edit/:id", element: <ColorDetail /> },
        {
          path: "*",
          element: (
            <h1 className="flex justify-center items-center h-screen text-2xl font-bold">
              Không tìm thấy
            </h1>
          ),
        },
      ],
    },
  ]);

  return router;
}

export default App;
