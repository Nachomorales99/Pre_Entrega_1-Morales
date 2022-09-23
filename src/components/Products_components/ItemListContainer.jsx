import React from 'react';

const ItemListContainer = ({products}) => {
    return (
        <> 
            <div id={products[0]} className="col-md-4">
                <img src={products[5]} className="card-img img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{products[1]}</h5>
                    <p className="card-text">{products[2]}</p>
                    <p className="card-text">{products[3]}</p>
                    <p className="card-text">{products[4]}</p>
                </div>
            </div> 
        </>
    );
}

export default ItemListContainer;
