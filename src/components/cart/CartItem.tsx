import React from 'react';
import Close from '../../../public/Icons/Close';
import { Game } from '@/utils/endpoint';

interface CartItemProps {
    game: Game,
    onRemove: ()=> void;

}

const CartItem: React.FC<CartItemProps> = ({ game, onRemove }) => {
    return (
        <div className='flex flex-col gap-11 lg:gap-0'>
            <div className='flex justify-between'>
            <div className='flex flex-col gap-4 md:flex-row'>
                <div className='max-h-40 w-full'>
                    <img className='w-full h-full object-cover' src={game.image} alt={`${game.name} video game image`} />
                </div>

                <div className='flex-col gap-3'>
                    <h4 className='text-sm font-bold text-main-gray'>{game.genre}</h4>
                    <h3 className='text-lg font-bold'>{game.name}</h3>
                    <p className='text-md text-accent-gray w-full text-wrap'>{game.description}</p>

                </div>
            </div>
            <div onClick={onRemove} className='flex flex-col justify-start cursor-pointer'>
            <Close width={24} height={24}/>
            </div>
            
        </div>
            <p className=' w-full text-right text-lg font-bold place-self-end'>{`$ ${game.price}`}</p>
        </div>
        
    );
};

export default CartItem;