import React from 'react';

import './Coin.css'


const Coin = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (  
        <tr>
           
           
                <td><img src={image} alt="" /></td>
                <td>{name}</td>
                <td>{symbol.toUpperCase()}</td>
                <td>${price.toLocaleString()}</td>
                <td>{volume.toLocaleString()}</td>
                {priceChange < 0 ? (
                    <td className="red">{Math.round(priceChange * 100) / 100} %</td>
                ) : (
                    <td className="green">{Math.round(priceChange * 100) / 100} %</td>
                )}
                <td>{marketcap}</td>

            
        </tr>
    );
}
 
export default Coin;