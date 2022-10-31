import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
            <li className="nav-link">
                <Link className="nav-link" to={"/carrito"}><i className="carrito fas fa-shopping-cart"></i> <span id="contador-carrito">0</span></Link>
            </li>
        </>
    );
}

export default CartWidget;
