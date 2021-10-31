import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({items}) => {
    return (
        <div>
            {items.map((el) => {
                return <ShopItem key={el.img} name={el.name} price={el.price} color={el.color} img={el.img}/>
            })}
        </div>
    );
}

export default ListView;
