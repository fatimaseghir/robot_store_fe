import {useEffect, useState} from "react";
import Product from "./Product";
import './style.css';

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
    const [productState, setProductState] = useState(Product);

    useEffect( () => {
        fetchProducts()
            .then(allProducts => {
                setProducts(allProducts);
            })
            .catch(err => err.message = 'Error here!')
    }, []);

    // console.log(products);


    const fetchProduct = async (id) => {
        const response = await fetch(`http://localhost:3000/robot_stores/${id}`);
        return await response.json();
    }
    const handleClick = (id) => {
        console.log(id);
        fetchProduct(id)
            .then((productState) => {
                setProductState(productState);
            })
    }

    return (
        <ul className="container" >
            { products.map((product) => {
                    return (
                        <div className="item" key={product.id} onClick={(event) => {
                            handleClick(product.id);
                        }}>
                        <h4 >{product.title}</h4>
                        <img src={product.image} />
                        <div className="price">
                        <h4 >$ {product.price}.00</h4>
                        <button type="button" className="btn btn-primary">Add to bag</button>
                        </div>
                        </div>
                    );
                })
            }
        </ul>
    );
}

export default Products;