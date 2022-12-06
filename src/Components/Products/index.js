import {useEffect, useState} from "react";
import Product from "./Product";
import './style.css';
import {Link} from "react-router-dom";

const Products = () => {

    const extractResponseData = (response) => {
        return response.json();
    };
    const fetchProducts = async () => {
        const response = await fetch(`http://localhost:3000/robot_stores`);
        if (!response.ok) {
            throw new Error();
        }
        return await extractResponseData(response);
    };

    const [products, setProducts] = useState([]);


    useEffect( () => {
        fetchProducts()
            .then(allProducts => {
                setProducts(allProducts);
            })
            .catch(err => err.message = 'Error here!')
    }, []);

    // console.log(products);
    const [productState, setProductState] = useState(Product);

    const fetchProduct = async (id) => {
        const response = await fetch(`http://localhost:3000/robot_stores/${id}`);
        return await response.json();
    }
    const handleClick = (id) => {
        console.log(id);
        fetchProduct(id)
            .then((productState) => {
                setProductState(productState.data);
            })
    }
    // let {
    //     id,
    //     title,
    //     price,
    //     image,
    // } =

    console.log(products[1]);

    return (
        <ul className="container" >
            { products.map((product) => {
                    return (
                        <div className="item" id={product.id} key={product.id} onClick={(event) => {
                            handleClick(product.id);
                        }}>
                            <Link to={`/product/${product.id}`}>
                                <h4>{product.title}</h4>
                                <img src={product.image} />
                                <div className="price">
                                    <h5 >$ {product.price}.00</h5>
                                    <button type="button" className="btn btn-primary">Add to bag</button>
                                </div>
                            </Link>
                        </div>
                    );
                })
            }
        </ul>
    );
}

export default Products;