import React from 'react'

const ProductPromotion = () => {
    return (
        <div className ='product__promotion'>
            <div className='divider_promotion'>
            <img alt="product_image" src ={require('../../images/sell.png')} />
            </div>
            <div className='divider_promotion'>
                <button>Go To Store</button>
                <h2>CHECK OUT KONONOV'S BEST SELLER FEATURED FITNESS BALLS!</h2>
            </div>
        </div>
    )
}

export default ProductPromotion;
