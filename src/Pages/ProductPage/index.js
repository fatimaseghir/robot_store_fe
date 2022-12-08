import '../page.css';
import Title from "../../Components/Title";
import Features from "../../Components/Features";
import NavBar from "../../Components/NavBar";
import Product from "../../Components/Products/Product";
import {useParams} from "react-router-dom";

const ProductsPage = () => {
    const {id} = useParams()
    return (
        <>
            <div className="web-structure">
            <Title/>
            <Features/>
            <NavBar/>
            <Product id={id}/>
            </div>
        </>
    );
}

export default ProductsPage;