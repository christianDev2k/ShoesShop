import React, { useState } from 'react';
import ShoesData from './data.json';
import ShoesList from './ShoesList';
import './style.scss';
import ProductDetailModal from './ProductDetailModal';
import CartModal from './CartModal';

const ShoesShop = () => {
    const [product, setProduct] = useState(ShoesData[0]);
    const [carts, setCart] = useState([]);

    const handleSetCart = shoes => {
        setCart(pre => {
            const index = pre.findIndex(s => s.id === shoes.id);

            if (index !== -1) {
                pre[index].cartQty++;
            } else {
                pre = [...pre, { ...shoes, cartQty: 1 }];
            }
            return [...pre];
        });
    };

    return (
        <div className='container-md mx-auto bg-gray-100'>
            <div className='max-w-screen-xl mx-auto px-5'>
                <div className='grid grid-cols-4 items-center'>
                    <div></div>
                    <h1 className='text-5xl font-bold py-12 text-center col-span-2'>Sneaskers Shop</h1>
                    <div className='cursor-pointer' data-modal-target='cartModal' data-modal-toggle='cartModal'>
                        <button className='block ml-auto'>
                            <svg
                                className='w-8 h-8 text-gray-800'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 18 21'
                            >
                                <path d='M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z' />
                            </svg>
                        </button>
                    </div>
                </div>
                <ShoesList ShoesData={ShoesData} setProduct={setProduct} handleSetCart={handleSetCart} />

                {/* Shoes Detail Modal  */}
                <ProductDetailModal product={product} handleSetCart={handleSetCart} />

                {/* Cart Modal  */}
                <CartModal carts={carts} setCart={setCart} />
            </div>
        </div>
    );
};

export default ShoesShop;
