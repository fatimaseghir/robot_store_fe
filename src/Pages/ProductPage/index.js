import '../page.css';
import Title from "../../Components/Title";
import ShoppingCard from "../../Components/ShoppingCard";
import NavBar from "../../Components/NavBar";
import Product from "../../Components/Products/Product";

const ProductsPage = () => {
    return (
        <>
            <div className="web-structure">
            <Title/>
            <ShoppingCard/>
            <NavBar/>
            <Product/>
            </div>
        </>
    );
}

export default ProductsPage;