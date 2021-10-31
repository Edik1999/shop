import React from 'react';

const ShopCard = ({name, price, color, img}) => {
    return (
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-color">{color}</p>
            <div className="card-img_wrapper">
                <img className="card-img" src={img} alt="sneakers"/>
            </div>
            <div className="card-footer">
                <span className="card-price">${price}</span>
                <button className="card-btn">add to cart</button>
            </div>
        </div>
    );
}

export default ShopCard;
