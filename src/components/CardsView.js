import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({cards}) => {
    return (
        <div className="cards-wrapper">
            {cards.map((el) => {
                return <ShopCard key={el.img} name={el.name} price={el.price} color={el.color} img={el.img}/>
            })}
        </div>
    );
}

export default CardsView;
