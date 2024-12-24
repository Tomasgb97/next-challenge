import React from 'react';
import Close from '../../../public/Icons/Close';

interface CartItemProps {
    id: number;
    genre: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;

}

const CartItem: React.FC<CartItemProps> = ({ id, genre, name, description, price, imageUrl }) => {
    return (
        <div className='flex flex-col gap-11 lg:gap-0'>
            <div className='flex gap-3'>
            <div className='flex flex-col gap-4 md:flex-row'>
                <div className='max-h-40 w-full'>
                    <img className='w-full h-full object-cover' src={imageUrl} alt={`${name} video game image`} />
                </div>

                <div className='flex-col gap-3'>
                    <h4 className='text-sm font-bold text-main-gray'>{genre}</h4>
                    <h3 className='text-lg font-bold'>{name}</h3>
                    <p className='text-md text-accent-gray w-full text-wrap'>{description}</p>

                </div>
            </div>
            <div className='flex flex-col justify-start'>
            <Close width={24} height={24}/>
            </div>
            
        </div>
            <p className=' w-full text-right text-lg font-bold place-self-end'>{`$ ${price}`}</p>
        </div>
        
    );
};

export default CartItem;