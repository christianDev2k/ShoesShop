import React from 'react';
import ShoesItem from './ShoesItem';

const ShoesList = ({ ShoesData, setProduct, handleSetCart }) => {
    return (
        <div className='grid grid-cols-4 gap-x-5 gap-y-7 py-6'>
            {ShoesData.map(i => (
                <ShoesItem key={i.id} shoes={i} setProduct={setProduct} handleSetCart={handleSetCart} />
            ))}
        </div>
    );
};

export default ShoesList;
