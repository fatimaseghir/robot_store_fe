import '../page.css';
import Title from "../../Components/Title";
import ShoppingCart from "../../Components/ShoppingCart";

const ProductsPage = () => {
    return (
        <>
            <div className="web-structure">
                <Title/>
                <ShoppingCart/>
            </div>
        </>
    );
}

export default ProductsPage;