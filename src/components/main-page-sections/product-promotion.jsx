import React, { Fragment, useState, useEffect }  from "react";

const ProductPromotion = () => {

    const [lang, setLang] = useState()

    useEffect(() => {
      setLang(localStorage.getItem('lang'))
    }, [])

    return (
        <Fragment>
        { lang === 'russian'
        ?  <div className ='product__promotion'>
             <div className='divider_promotion'>
              <img alt="product_image" src ={require('../../images/sell.png')} />
            </div>
             <div className='divider_promotion'>
               <button>В Магазин</button>
               <h2>У НАС ЕСТЬ НОВЫЕ ФИТНЕС ШТУЧКИ!!!</h2>
             </div>
           </div>
        : <div className ='product__promotion'>
            <div className='divider_promotion'>
            <img alt="product_image" src ={require('../../images/sell.png')} />
            </div>
            <div className='divider_promotion'>
                <button>Go To Store</button>
                <h2>CHECK OUT KONONOV'S BEST SELLER FEATURED FITNESS THINGS!</h2>
            </div>
        </div>}
        </Fragment>
    )
}

export default ProductPromotion;
