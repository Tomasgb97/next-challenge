'use client'
import React from 'react';
import Button from '../common/Button';
import { Game } from '@/utils/endpoint';


const NewBadge = () =>{
    return( <div className='absolute left-3 top-3 px-3 py-2 rounded-md text-md bg-[#F5F5F4]'>
        New
    </div>)
}
const CatalogItem: React.FC<Game> = ({ id, genre, name, price, image, isNew }) => {
    return (
        <div className="w-full flex flex-col gap-5 max-w-96  p-6 rounded-2xl border border-0.5 border-accent-gray " key={id}>
            <div className='relative rounded-t-2xl h-60'>
                {isNew && <NewBadge/>}
            <img src={image} alt={name} className=" w-full h-full object-cover rounded-t-2xl" />
            </div>
            
            <div className="w-full flex flex-col gap-3">
                <h2 className="items-start text-md font-bold text-accent-gray">{genre.toLocaleUpperCase()}</h2>
                <div className='flex justify-between'>
                <p className="max-w-[60%] truncate text-lg font-bold">{name}</p>
                <p className="catalog-item-price text-xl font-bold">${price}</p>
                </div>
                
            </div>
            <Button type="outline" onClick={()=>{}} label='ADD TO CART'></Button>
        </div>
    );
};

export default CatalogItem;