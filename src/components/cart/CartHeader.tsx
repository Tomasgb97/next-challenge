import React from 'react';

const CartHeader: React.FC = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-4xl font-bold'>Your cart</h2>
            <span className='text-2xl '>3 items</span>
        </div>
    );
};

export default CartHeader;