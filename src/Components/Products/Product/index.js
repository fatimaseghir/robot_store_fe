import {useEffect, useState} from "react";
import './style.css';

const Product = (props) => {

    const {id} = props;
    const [productState, setProductState] = useState([]);

    const extractResponseData = (response) => {
        return response.json();
    }
    const fetchProductState = async (id) => {
        const response = await fetch(`http://localhost:3000/robot_stores/${id}`);
        return await extractResponseData(response);
    }

    useEffect( () => {
        fetchProductState(id)
            .then(productData => {
                setProductState(productData[0]);
                console.log(productData);
            })}, []);

    const [liked, setLiked] = useState(false);
    const handleLikedShow = () => setLiked(true);

return (
    <>
        <div className="product-container">
            <div className="product-details">
                 <h4 className="product-title"> {productState.title}</h4>
                   <p className="description"> {productState.description}</p>
                   <p className="category">Category: {productState.category}</p>
                   <p className="character">Character: {productState.character}</p>
                   <p className="">$ {productState.price}</p>
                <button type="button" className="btn btn-primary">Add to bag</button>
                <button onClick={handleLikedShow} ><img className="logo" src={require('../images/like.png')} alt="image" ></img></button>
            </div>
            <div className="product-images">
                 <img src={productState.image}/>
            </div>
        </div>
    </>
);
}

export default Product;