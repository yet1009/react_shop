import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage/index";
import DetailPage from "./pages/DetailPage/index.jsx";
import CartPage from "./pages/CartPage/index.jsx";
import NotFoundPage from "./pages/NotFoundPage/index.jsx";
import OrderPage from "./pages/OrderPage/index.jsx";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import LoginPage from "./pages/LoginPage/index.jsx";

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path={"product/:id"} element={<DetailPage />} />
                <Route path={"cart"} element={<CartPage />} />
                <Route path={"login"} element={<LoginPage />} />
                <Route path={"register"} element={<RegisterPage />} />
                <Route path={"order"} element={<OrderPage />} />
                <Route path={"*"} element={<NotFoundPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
