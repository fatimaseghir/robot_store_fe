import '../page.css';
import Title from "../../components/Title";
import ShoppingCard from "../../components/ShoppingCard";
import NavBar from "../../components/NavBar";
import Product from "../../components/Products/Product";

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