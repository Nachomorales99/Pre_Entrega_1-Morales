import React from 'react';
import Form from './Navbar_components/Form';
import Dropdown from './Navbar_components/Dropdown';
import Secciones from './Navbar_components/Secciones';
import CartWidget from './Navbar_components/CartWidget';

const Navbar = () => {
    const listDropwon = ["Remeras", "Buzos", "Bermudas", "Ver todo"]
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="navbar-logo" src="https://res.cloudinary.com/nacho-morales/image/upload/v1663890421/multimedia/Deer_logo_rbij52.jpg" alt="" /></a>
                    <a className="navbar-brand" href="#">DEER</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarColor02" style={{}}>
                        <ul className="navbar-nav me-auto">
                            <Dropdown lista={listDropwon} />
                            <Secciones />
                        </ul>
                        <Form busqueda="Buscar Producto" />
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;