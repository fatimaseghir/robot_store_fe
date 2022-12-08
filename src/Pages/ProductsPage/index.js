import '../page.css';
import Title from "../../Components/Title";
import Features from "../../Components/Features";
import NavBar from "../../Components/NavBar";
import Products from "../../Components/Products";

const ProductsPage = () => {
    return (
        <>
            <div className="web-structure">
             <Title />
            <Features />
            <NavBar/>
            <Products/>
            </div>
        </>
    );
}

export default ProductsPage;