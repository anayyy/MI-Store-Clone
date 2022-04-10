import React from 'react'
import '../styles/ProductReviews.css'
import ProductReviewCard from './ProductReviewCard.js'

const ProductReviews = ({reviews}) => {
  return (
    <div className='productReviews'>
        {reviews.map((item,index)=>(
            <ProductReviewCard price={item.price}  image={item.image} name={item.name} review={item.review} key={item.image} index={index} />
        ))}
    </div>
  )
}

export default ProductReviews