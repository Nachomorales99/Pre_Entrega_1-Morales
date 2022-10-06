import { Link } from 'react-router-dom';
import Form from '../layouts/Form';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';
import CartWidget from '../layouts/CartWidget';

const Navbar = () => {
    const listDropwon = ["Remeras", "Buzos", "Bermudas", "Ver todo"]
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><img className="navbar-logo" src="https://res.cloudinary.com/nacho-morales/image/upload/v1663890421/multimedia/Deer_logo_rbij52.jpg" alt="" /></Link>
                    <Link className="navbar-brand" to="/home">DEER</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarColor02" style={{}}>
                        <ul className="navbar-nav me-auto">
                            <Dropdown lista={listDropwon} />
                            <Secciones />
                        </ul>
                    </div>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-link">
                            <Link className="nav-link" to="/carrito">Carrito</Link>
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;