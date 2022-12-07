import '../page.css';
import Title from "../../Components/Title";
import ShoppingCard from "../../Components/ShoppingCard";
import NavBar from "../../Components/NavBar";
import Product from "../../Components/Products/Product";
import {useParams} from "react-router-dom";

const ProductsPage = () => {
    const {id} = useParams()
    return (
        <>
            <div className="web-structure">
            <Title/>
            <ShoppingCard/>
            <NavBar/>
            <Product id={id}/>
            </div>
        </>
    );
}

export default ProductsPage;