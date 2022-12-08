import {Route, Routes} from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/shoppingcart" element={<ShoppingCartPage/>} />
    </Routes>
  );
}

export default App;
