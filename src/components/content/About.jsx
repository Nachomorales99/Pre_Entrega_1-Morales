import React from 'react';

const About = () => {
    return (
        <>
        <section className="portada jumbotron text-center">
        <h2 className="titulo4">Un poco de nosotros</h2>
    </section>
            <section id="nosotros" className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div id="carru_nosotros" className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FUs1.jpg?alt=media&token=d1a0699a-bda7-4fc7-b828-5402dd06648a" className="d-block w-100" alt="Us1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FUs2.jpg?alt=media&token=28b95970-af3e-41d7-8316-082d4a399734" className="d-block w-100" alt="Us2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FUs3.jpg?alt=media&token=09e9ec24-2eb6-472a-bb42-8ee40b258193" className="d-block w-100" alt="Us3" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FUs4.jpg?alt=media&token=b8b75743-6ae3-48b8-bc2e-d5b32381124f" className="d-block w-100" alt="Us4" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="parrafo col-sm-12 col-md-4 col-lg-6">
                        <p className="texto"> Black Owl es un emprendimiento nacido en la provincia de Mendoza. Surgio de la idea de
                            un grupo de amigos que decidieron comenzar a confeccionar ropa estilo streetwear, que pudiera por
                            usada, tanto por hombres y mujeres por igual, teniendo en cuenta que todos tenemos cuerpos
                            diferentes, por lo tanto, en este espacio podran encontar su comodad y toda la onda canchera que el
                            movimiento Streetwaer nos ofrece. Bienvenidos a Black owl, donde el negro siempre es mejor y nunca
                            pasa de moda
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
