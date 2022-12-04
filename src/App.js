import {Route, Routes} from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";


function App() {
  return (
    <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product" element={<ProductPage/>} />
    </Routes>
  );
}

export default App;
