import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts } from '../../redux/slice/cart';

const AjaxCart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const cartData = useSelector(state => state.getCartProducts);
    console.log(cartData);

    useEffect(() => {
        dispatch(cartProducts('https://fakestoreapi.com/carts'));
    }, []);

    const cartProductsData = cartData?.cart?.map((cartData, index) => (
        <div key={index}>
            <span>Created Date: {new Date(cartData.date).toLocaleString()}</span> <br />
            <span>ID: {cartData.userId}</span>
        </div>
    ))


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartProductsData}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AjaxCart;