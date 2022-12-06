import './style.css';


const Product = () => {

return (
    <>
        <div className="product-container">
            <div className="product-details">
                 <h4 className="product-title">It's All 0's and 1's to Me! Apron</h4>
                   <p className="description">Cheer the team on in style with our unstructured, low crown, six-panel baseball
                       ap made of 100% organic cotton twill. Featuring our original Binaryville artwork,
                       screen-printed with PVC- and phthalate-free inks. Complete with matching, sewn
                       eyelets, and adjustable fabric closure.</p>
                   <p className="category">Category: Aprons </p>
                   <p className="character">Character: Fred </p>
                   <p className="">Price: $24</p>
                <button type="button" className="btn btn-primary">Add to bag</button>
            </div>
            <div className="product-images">
                 <img src="https://binaryville.com/images/products/fred-0s1s-apron-black.jpg"/>
            </div>
        </div>
    </>

);
}

export default Product;