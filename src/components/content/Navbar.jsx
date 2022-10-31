import { Link } from 'react-router-dom';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';
import CartWidget from '../layouts/CartWidget';
const Navbar = () => {
    const listDropwon = ["Remeras", "Buzos", "Joggers", "Ver todo"]
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><img className="navbar-logo" src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FLogo.jpg?alt=media&token=55a15520-a78a-4b35-a81c-e5e9c9c4eb1a" alt="" /></Link>
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
                        <CartWidget/>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;