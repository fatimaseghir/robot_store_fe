import './style.css';
import {Modal, ModalHeader, ModalTitle} from 'react-bootstrap';
import {useState} from "react";

const Features = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [liked, setLiked] = useState(false);
    const handleLikedClose = () => setLiked(false);
    const handleLikedShow = () => setLiked(true);

    return (
        <>
        <Modal show={show} onHide={handleClose} >
            <ModalHeader closeButton/>
            <ModalTitle> Shopping cart </ModalTitle>
        </Modal>
        <Modal show={liked} onHide={handleLikedClose} >
                <ModalHeader closeButton/>
                <ModalTitle> Liked Items, save for later </ModalTitle>
        </Modal>
        <div className="shopping-cart text-end pb-4 me-5">
            <button onClick={handleLikedShow} ><img className="logo" src={require('./images/like.png')} alt="image" ></img></button>
            <button onClick={handleShow} ><img className="logo" src={require('./images/bag.png')} alt="image" ></img></button>
        </div>
        </>
    );
}

export default Features;