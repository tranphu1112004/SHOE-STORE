// import "./App.css";
// import { useRoutes } from "react-router-dom";
// import LayoutClient from "./layout/client/LayoutCilent";
// import LayoutAdmin from "./layout/admin/LayuotAdmin"; // Fixed typo

// import HomeAdmin from "./components/Admin/HomeAdmin";
// import ListProduct from "./components/Admin/ListProduct";
// import OderAdmin from "./components/Admin/OderAdmin";
// import Statical from "./components/Admin/Statical";
// import Voicher from "./components/Admin/Voicher";
// import AddProduct from "./components/Admin/AddProduct";
// import EditProduct from "./components/Admin/EditProduct";
// import ProductContext from "./context/ProductContext";
// import ColorContext from "./context/ColorContext";
// import SizeContext from "./context/SizeContext";
// import BrandContext from "./context/BrandContext";
// import ColorDetail from "./components/Admin/ColorDetail";
// import CategoryContext from "./context/CategoryContext";
// import ProductDetail from "./components/Admin/ProductDetail";
// import StoppedProducts from "./components/Admin/StoppedProducts";
// import ManagementPage from "./components/Admin/ManagementPage";
// import Register from "./components/acc/Register";
// import Login from "./components/acc/Login";
// import OrderContext from "./context/OrderContext";
// import VoucherProvider from "./context/VoucherContext";
// import { UserProvider } from "./context/UserContext";
// import AccountList from "./components/Admin/AccountList";
// import ReviewContext from "./context/ReviewContext";
// import Home from "./views/pages/Home/Home";
// import ProductList from "./views/pages/ProductList/ProductList";
// import Contact from "./views/pages/Contact/Contact";
// import DetailProduct from "./views/pages/DetailProduct/DetailProduct";
// import Checkout from "./views/pages/Checkout/Checkout";
// import Oder from "./views/pages/Oder/Oder";
// import Cart from "./views/pages/Cart/Cart";
// import ContactProvider from "./context/CategoryContext";
// import Introduce from "./views/pages/Introduce/Introduce";
// function App() {
//   const router = useRoutes([
//     {
//       path: "",
//       element: (
//         <UserProvider>
//           <ContactProvider>
//             <ProductContext>
//               <VoucherProvider>
//                 <OrderContext>
//                   <CategoryContext>
//                     <BrandContext>
//                       <SizeContext>
//                         <ColorContext>
//                           <LayoutClient />
//                         </ColorContext>
//                       </SizeContext>
//                     </BrandContext>
//                   </CategoryContext>
//                 </OrderContext>
//               </VoucherProvider>
//             </ProductContext>
//           </ContactProvider>
//         </UserProvider>
//       ),
//       children: [
//         { path: "", element: <Home /> },
//         { path: "introduce", element: <Introduce /> },
//         { path: "Listitem", element: <ProductList /> },
//         { path: "contact", element: <Contact /> },
//         { path: "detail", element: <DetailProduct /> },
//         { path: "cart", element: <Cart /> },
//         { path: "checkout", element: <Checkout /> },
//         { path: "oder", element: <Oder /> },
//         { path: "*", element: <h1>404 Not Found</h1> },
//       ],
//     },
//     { path: "login", element: <Login /> },
//     { path: "register", element: <Register /> },
//     {
//       path: "admin",
//       element: (
//         <ReviewContext>
//           <UserProvider>
//             <ProductContext>
//               <VoucherProvider>
//                 <OrderContext>
//                   <CategoryContext>
//                     <BrandContext>
//                       <SizeContext>
//                         <ColorContext>
//                           <LayoutAdmin />
//                         </ColorContext>
//                       </SizeContext>
//                     </BrandContext>
//                   </CategoryContext>
//                 </OrderContext>
//               </VoucherProvider>
//             </ProductContext>
//           </UserProvider>
//         </ReviewContext>
//       ),
//       children: [
//         { path: "", element: <HomeAdmin /> },
//         { path: "products", element: <ListProduct /> },
//         { path: "product/add", element: <AddProduct /> },
//         { path: "product/edit/:id", element: <EditProduct /> },
//         { path: "products/stopped", element: <StoppedProducts /> },
//         { path: "checkout", element: <OderAdmin /> },
//         { path: "users", element: <AccountList /> },
//         { path: "statical", element: <Statical /> },
//         { path: "voicher", element: <Voicher /> },
//         { path: "product/:id", element: <ProductDetail /> },
//         { path: "all", element: <ManagementPage /> },
//         { path: "color/edit/:id", element: <ColorDetail /> },
//         { path: "size/edit/:id", element: <ColorDetail /> },
//         { path: "category/edit/:id", element: <ColorDetail /> },
//         { path: "brand/edit/:id", element: <ColorDetail /> },
//         {
//           path: "*",
//           element: (
//             <h1 className="flex justify-center items-center h-screen text-2xl font-bold">
//               Không tìm thấy
//             </h1>
//           ),
//         },
//       ],
//     },
//   ]);

//   return router;
// }

// export default App;
import "./App.css";
import { useRoutes } from "react-router-dom";
import LayoutClient from "./layout/client/LayoutCilent"; // Fixed typo
import LayoutAdmin from "./layout/admin/LayuotAdmin"; // Fixed typo
import HomeAdmin from "./components/Admin/HomeAdmin";
import ListProduct from "./components/Admin/ListProduct";
import OrderAdmin from "./components/Admin/OderAdmin"; // Fixed typo
import Statical from "./components/Admin/Statical";
import Voucher from "./components/Admin/Voicher"; // Fixed typo
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
import DetailProduct from "./views/pages/DetailProduct/DetailProduct";
import Checkout from "./views/pages/Checkout/Checkout";
import Order from "./views/pages/Oder/Oder"; // Fixed typo
import Cart from "./views/pages/Cart/Cart";
import Introduce from "./views/pages/Introduce/Introduce";
import { ContactProvider } from "./context/ContactContext";
import Content from "./views/pages/Content/Content";

function App() {
  const router = useRoutes([
    {
      path: "",
      element: (
        <UserProvider>
          <ContactProvider>
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
          </ContactProvider>
        </UserProvider>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "introduce", element: <Introduce /> },
        { path: "listitem", element: <ProductList /> },
        { path: "contact", element: <Contact /> },
        { path: "detail", element: <DetailProduct /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
        { path: "order", element: <Order /> }, // Fixed typo
        { path: "*", element: <h1>404 Not Found</h1> }, // Consider creating a styled 404 component
      ],
    },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    {
      path: "admin",
      element: (
        <ReviewContext>
          <UserProvider>
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
          </UserProvider>
        </ReviewContext>
      ),
      children: [
        { path: "", element: <HomeAdmin /> },
        { path: "products", element: <ListProduct /> },
        { path: "product/add", element: <AddProduct /> },
        { path: "product/edit/:id", element: <EditProduct /> },
        { path: "products/stopped", element: <StoppedProducts /> },
        { path: "checkout", element: <OrderAdmin /> }, // Fixed typo
        { path: "users", element: <AccountList /> },
        { path: "content", element: <Content /> },
        { path: "statical", element: <Statical /> },
        { path: "voucher", element: <Voucher /> }, // Fixed typo
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
