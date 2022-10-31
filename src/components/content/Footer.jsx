import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';

const Footer = () => {
    return (
        <>
            <footer className="container-fluid bg-black">
                <div className="row">
                    <div className="col">
                        <h3 className="footer-title">Site Map</h3>
                        <ul className="colum-sitemap">
                            <Secciones />
                            <Link className="dropdown-item" to={"/category/remera"}>Remeras</Link>
                            <Link className="dropdown-item" to={"/category/buzo"}>Buzos</Link>
                            <Link className="dropdown-item" to={"/category/jogger"}>Joggers</Link>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="footer-title">Networks</h3>
                        <div className="redes-sociales">
                            <a className="redes-soc red-instagram" href="https://www.instagram.com/blackowl.mza/" target="_blank">
                                <i className="fa-brands fa-instagram" />
                            </a>
                            <a className="redes-soc red-facebook" href="https://www.facebook.com/profile.php?id=100000700063772" target="_blank">
                                <i className="fa-brands fa-facebook" />
                            </a>
                            <a className="redes-soc red-twitter" href="https://twitter.com/NachoMorales15" target="_blank">
                                <i className="fa-brands fa-twitter" />
                            </a>
                            <a className="redes-soc red-whatsapp" href="https://wa.link/hh39sy" target="_blank">
                                <i className="fa-brands fa-whatsapp" />
                            </a>
                            <a className="redes-soc red-mail" href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                                <i className="fa-regular fa-envelope" />
                            </a>
                        </div>
                    </div>
                    <div className="col footer-logo">
                        <a href="../index.html">
                            <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FLogo.jpg?alt=media&token=55a15520-a78a-4b35-a81c-e5e9c9c4eb1a" alt="logo black owl" />
                        </a>
                    </div>
                    <div className="pie-pagina row container-fluid">
                        <div id="pie" className="container-fluid">
                            <p className="text-center">Black Owl - Since 2019</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
