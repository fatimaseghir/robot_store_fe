import '../page.css';
import Title from "../../components/Title";
import ShoppingCard from "../../components/ShoppingCard";
import NavBar from "../../components/NavBar";
import Products from "../../components/Products";

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