import '../page.css';
import Title from "../../Components/Title";
import ShoppingCard from "../../Components/ShoppingCard";
import NavBar from "../../Components/NavBar";
import Products from "../../Components/Products";

const ProductsPage = () => {
    return (
        <>
            <div className="web-structure">
            <Title/>
            <ShoppingCard/>
            <NavBar/>
            <Products/>
            </div>
        </>
    );
}

export default ProductsPage;