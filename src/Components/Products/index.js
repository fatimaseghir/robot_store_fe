import {useEffect, useState} from "react";
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

    const [liked, setLiked] = useState(false);
    const handleLikedShow = () => setLiked(true);

    return (
        <ul className="container" >
            { products.map((product) => {
                    return (
                        <div className="item" id={product.id} key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <h4 className="pt-5 ">{product.title}</h4>
                                <img className="product-img" src={product.image} />
                                <div className="price">
                                    <button type="button" className="mt-4 btn btn-primary">Add to bag</button>
                                    <button onClick={handleLikedShow} ><img className="logo" src={require('./images/like.png')} alt="image" ></img></button>
                                    <h5 className="mt-4">$ {product.price}.00</h5>
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