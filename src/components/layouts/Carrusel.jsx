import React from 'react';

const Carrusel = () => {
    return (
        <>
            <section className="carru">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FCarrusel1.jpg?alt=media&token=57438be5-4f19-4ab8-8892-11c0970de50e" className="d-block w-100" alt="type" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FCarrusel2.jpg?alt=media&token=c7481e40-6b13-45a4-a3c7-1fea2f963677" className="d-block w-100" alt="classic" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/blackowl-mdz.appspot.com/o/imagenes%2FCarrusel3.jpg?alt=media&token=bb1a07be-d331-41f0-879c-547376cd44b5" className="d-block w-100" alt="kids" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Carrusel;