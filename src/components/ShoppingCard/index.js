import './style.css';


const ShoppingCard = () => {
    return (
        <div className="shopping-card text-end pb-4 me-5">
            <img className="logo" src={require('./images/profile.png')} alt="image" ></img>
            <img className="logo" src={require('./images/like.png')} alt="image" ></img>
            <img className="logo" src={require('./images/bag.png')} alt="image" ></img>
        </div>
    );
}

export default ShoppingCard;