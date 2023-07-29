import React from 'react';
import { Modal } from 'flowbite';

const ProductDetailModal = ({ product, handleSetCart }) => {
    const { image, name, price, description, quantity } = product;
    const modal = new Modal(document.getElementById('cartModal'), {
        placement: 'top-right',
    });

    return (
        <div>
            {/* Main modal */}
            <div
                id='productDetailModal'
                tabIndex={-1}
                aria-hidden='true'
                className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
            >
                <div className='relative w-full max-w-3xl max-h-full '>
                    {/* Modal content */}
                    <div className=' relative bg-white rounded-lg shadow dark:bg-gray-700'>
                        <button
                            type='button'
                            className='absolute right-5 top-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                            data-modal-hide='productDetailModal'
                        >
                            <svg
                                className='w-3 h-3'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 14 14'
                            >
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                />
                            </svg>
                            <span className='sr-only'>Close modal</span>
                        </button>

                        {/* Modal body */}
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={image} alt='product' />
                            </div>
                            <div className='modal-info p-5 overflow-y-scroll h-96'>
                                <h6 className='text-xs font-bold text-gray-400 my-1'>ADIDAS</h6>
                                <h3 className='text-2xl font-bold uppercase mb-1'>{name}</h3>
                                <div className='flex items-center'>
                                    <svg
                                        className='w-2 h-2 text-black mr-1'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-2 h-2 text-black mr-1'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-2 h-2 text-black mr-1'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-2 h-2 text-black mr-1'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-2 h-2 text-black mr-1'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <p className='text-xs ml-2 mr-5'>1 review</p>
                                    <p className='text-xs text-orange-600'>15 sold in last 16 hours</p>
                                </div>
                                <p className='py-5 font-bold text-2xl'>${price.toFixed(2)}</p>
                                <p className='text-sm text-gray-700 mb-5'>{description}</p>
                                <p className='text-sm text-gray-400 mb-5'>
                                    Quantity: <span className='font-bold text-gray-800'> {quantity}</span>
                                </p>
                                <div className=''>
                                    <div>
                                        <button
                                            data-modal-hide='productDetailModal'
                                            // data-modal-target='cartModal'
                                            // data-modal-toggle='cartModal'
                                            onClick={() => {
                                                handleSetCart(product);
                                                modal.show();
                                            }}
                                            type='button'
                                            className='w-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-full text-xs px-7 py-3'
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
