import React from 'react';

const CartModal = ({ carts, setCart }) => {
    const handleChangeQty = (id, qty) => {
        setCart(pre => {
            const index = pre.findIndex(s => s.id === id);
            pre[index].cartQty = pre[index].cartQty + qty || 1;
            return [...pre];
        });
    };

    const handleDelCart = id => {
        return setCart(pre => pre.filter(s => s.id !== id));
    };

    const handleCheckout = () => {
        alert('Tổng giá trị đơn hàng của bạn là: $' + subtotal);
        alert('Cảm ơn bạn đã mua sắm tại SNEAKERS SHOP ^^');
        setCart([]);
    };

    const subtotal = carts.reduce((acc, s) => {
        acc += s.cartQty * s.price;
        return acc;
    }, 0);

    return (
        <div
            id='cartModal'
            data-modal-placement='top-right'
            tabIndex={-1}
            aria-hidden='true'
            className='fixed top-0 left-0 right-0 z-50 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full'
        >
            <div className='relative w-full max-w-md max-h-full'>
                {/* Modal content */}
                <div className='relative bg-white shadow dark:bg-gray-700 h-screen flex flex-col'>
                    {/* Modal header */}
                    <div className='flex items-start justify-between px-4 py-2 border-b rounded-t dark:border-gray-600'>
                        <h3 className='text-lg font-semibold text-gray-900'>Shoping Cart</h3>
                        <button
                            type='button'
                            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                            data-modal-hide='cartModal'
                        >
                            <svg
                                className='w-2 h-2'
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
                    </div>
                    {/* Modal body */}
                    <div className='cart-list w-full self-start h-full overflow-y-scroll'>
                        {carts.length ? (
                            carts.map(p => {
                                const { id, image, price, name, cartQty } = p;
                                return (
                                    <div
                                        key={id}
                                        className='flex flex-col items-center px-2 bg-white shadow w-full md:flex-row md:max-w-xl'
                                    >
                                        <div className='w-3/12'>
                                            <img
                                                className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                                                src={image}
                                                alt='shoes nike'
                                            />
                                        </div>
                                        <div className='w-8/12 flex flex-col justify-between p-4 leading-normal'>
                                            <h5 className='mb-0.5 text-base font-bold tracking-tight text-gray-900'>
                                                {name}
                                            </h5>
                                            <p className='text-base font-semibold mb-0.5'>${price.toFixed(2)}</p>
                                            <div className='flex bg-gray-200 w-fit mt-1 px-2 py-0.5 rounded'>
                                                <button onClick={() => handleChangeQty(id, -1)}>
                                                    <svg
                                                        className='w-2 h-2 text-gray-800'
                                                        aria-hidden='true'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fill='none'
                                                        viewBox='0 0 18 2'
                                                    >
                                                        <path
                                                            stroke='currentColor'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth='2'
                                                            d='M1 1h16'
                                                        />
                                                    </svg>
                                                </button>
                                                <input
                                                    readOnly
                                                    type='number'
                                                    className='cart-input-qty col-span-2 p-0 border-0 text-center h-full w-10 bg-transparent'
                                                    value={cartQty}
                                                />
                                                <button onClick={() => handleChangeQty(id, 1)}>
                                                    <svg
                                                        className='w-2 h-2 text-gray-800'
                                                        aria-hidden='true'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fill='none'
                                                        viewBox='0 0 18 18'
                                                    >
                                                        <path
                                                            stroke='currentColor'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth='2'
                                                            d='M9 1v16M1 9h16'
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='w-1/12 self-start pt-4'>
                                            <button className='block mx-auto' onClick={() => handleDelCart(id)}>
                                                <svg
                                                    className='w-4 h-4 text-gray-500 hover:text-gray-600'
                                                    aria-hidden='true'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='currentColor'
                                                    viewBox='0 0 18 20'
                                                >
                                                    <path d='M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z' />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className='flex justify-center items-center h-full'>
                                <div className='text-center'>
                                    <svg
                                        className='w-14 h-14 text-gray-800 mx-auto'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 18 20'
                                    >
                                        <path
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z'
                                        />
                                    </svg>
                                    <h2 className='font-bold mt-4 text-3xl'>Empty cart :(</h2>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Modal footer */}
                    {carts.length ? (
                        <div className='p-6'>
                            <div className='flex justify-between py-5 border-t border-gray-200 font-semibold text-lg'>
                                <h4>Subtotal</h4>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <div className='flex items-center mt-auto '>
                                <button
                                    data-modal-hide='cartModal'
                                    type='button'
                                    className='text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center w-full'
                                    onClick={handleCheckout}
                                >
                                    CHECKOUT NOW !
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default CartModal;
