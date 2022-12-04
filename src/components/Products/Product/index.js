const Product = (props) => {

    const Product = {
        _id: "",
        id: "",
        title: "",
        price: "",
        image: "",
        category_id: "",
        category: "",
        character_id: "",
        character: "",
        description: "",
        image2: "",
        image3: ""
    }


return (
    <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://binaryville.com/images/products/fred-0s1s-tshirt-black.jpg"
                         alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://binaryville.com/images/products/fred-0s1s-tshirt-gray.jpg"
                         alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src=".https://binaryville.com/images/products/fred-0s1s-tshirt-white.jpg"
                         alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div>
        <h4>I Compute, Therefore I Am Baseball Hat</h4>
            <p>Cheer the team on in style with our unstructured, low crown, six-panel baseball
                cap made of 100% organic cotton twill. Featuring our original Binaryville artwork,
                screen-printed with PVC- and phthalate-free inks. Complete with matching, sewn
                eyelets, and adjustable fabric closure.</p>

        </div>

    </>

);
}

export default Product;