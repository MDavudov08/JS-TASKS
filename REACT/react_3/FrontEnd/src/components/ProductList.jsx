import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching the products:', error);
            });
    }, []);

    return (
        <div>
            <h1>Telephones</h1>
            <div className='first-div'>
                {products.map(product => (
                    <div className='second-div' key={product.id}>
                        <img src={product.image}/>
                        <h2>{product.name}</h2>
                        <p>
                            {product.discountPrice ? (
                                <>
                                    <span className='span_1'>${product.price}  </span>
                                    <span className='span_2'>${product.discountPrice}</span>
                                </>
                            ) : (
                                <span>${product.price}</span>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
