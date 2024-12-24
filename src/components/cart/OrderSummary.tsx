
import mockupData from '@/utils/mockData';
import React from 'react';


const OrderSummary: React.FC = () => {
    return (
        <div className=' h-fit flex flex-col items-center gap-6 py-6 px-4 border border-accent-gray/30 rounded-lg'>
            <div className='w-full items-start flex flex-col gap-3'>
                <h2 className='text-xl font-bold'>Order Summary</h2>
                <h3 className='text-lg'>3 Items</h3>
            </div>
            <div className='w-full flex flex-col'>
            <div className=' flex flex-col pb-6 pt-5 gap-3'>
            {mockupData.map((item, index)=>{return(
                <div className='w-full flex justify-between' key={item.id}>
                    <span>{item.name}</span>
                    <span>{`$ ${item.price.toFixed(2)}`}</span>
                </div>
            )})}
            </div>
            

            <div className='flex justify-between text-xl border-t border-accent-gray/30 font-bold py-6'>
                <h2>Order Total</h2>
                <span>{`$ total price here`}</span>
            </div>
            </div>
            

        </div>
    );
};

export default OrderSummary;