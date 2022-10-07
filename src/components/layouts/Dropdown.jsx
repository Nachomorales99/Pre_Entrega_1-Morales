import {Link} from "react-router-dom";

const Dropdown = ({lista}) => {

    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to={"/category/remera"}>{lista[0]}</Link>
                    <Link className="dropdown-item" to={"/category/buzo"}>{lista[1]}</Link>
                    <Link className="dropdown-item" to={"/category/jogger"}>{lista[2]}</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to={"/"}>{lista[3]}</Link>
                </div>
            </li>
        </>
    );
}

export default Dropdown;