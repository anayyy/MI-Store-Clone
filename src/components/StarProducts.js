import React from 'react';
import '../styles/StartProducts.css';

const StarProducts = ({starProduct}) => {
  return (
    <div className='starProduct'>
        <div><a href={starProduct[0].url}><img src={starProduct[0].image} alt="Product" /></a></div>
        <div>
        <a href={starProduct[1].url}><img src={starProduct[1].image} alt="Product" /></a>
        <a href={starProduct[2].url}><img src={starProduct[2].image} alt="Product" /></a>
        <a href={starProduct[3].url}><img src={starProduct[3].image} alt="Product" /></a>

        </div>

    </div>
    
  )
}

export default StarProducts