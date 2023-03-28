import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shoes.css'

const Shoes = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shoe-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>This is cart container</h4>

            </div>
        </div>
    );
};

export default Shoes;