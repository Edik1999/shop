import React from 'react';

const ShopItem = ({name, price, color, img}) => {
    return (
        <div className="list-wrapper">
            <div className="list-img_wrapper">
                <img className="list-img" src={img} alt="sneakers"/>
            </div>
            <h2 className="list-title">{name}</h2>
            <p className="list-color">{color}</p>
            <span className="card-price">${price}</span>
            <button className="card-btn">add to cart</button>
        </div>
    );
}

export default ShopItem;
