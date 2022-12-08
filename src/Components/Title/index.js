import './style.css';
import {Link} from "react-router-dom";

const Title = () => {
    return (
        <>
            <Link to={`/`}> <div className="title text-center fs-2 fw-bolder pt-4 pe-5 font-family-Android7">ROBOT STORES</div></Link>
        </>
    );
}

export default Title;