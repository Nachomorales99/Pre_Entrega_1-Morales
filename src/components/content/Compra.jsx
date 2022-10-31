import React,{useState, useEffect} from 'react';


const Compra = () => {
    const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm))
        e.target.reset()
    }

    return (

        <>
            <div className="container">
            <form onSubmit={consultarForm} ref={datosFormulario}>
        
            <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" name="nombre" />
        </div> 
        <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" name="apellido" />
        </div> 
        <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Direccion</label>
            <input type="text" className="form-control" name="direccion" />
        </div> 
        <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Telefono</label>
            <input type="number" className="form-control" name="telefono" />
        </div> 
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email"  />
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Repita su email</label>
            <input type="email" className="form-control" name="email"  />
        </div>
            <button type="submit" className="btn btn-primary">Realizar Compra</button>
        </form>
            </div>
        </>
    );
}

export default Compra;