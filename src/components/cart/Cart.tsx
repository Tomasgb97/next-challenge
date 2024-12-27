'use client'

import Link from 'next/link';
import React from 'react';
import Back from '../../../public/Icons/Back';
import Button from '../common/Button';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import { useCartStore } from '@/services/stores/cart-store';

const Cart: React.FC = () => {
   const {items, removeItem} = useCartStore()
        return (
            <>
            <div className="w-full px-6 lg:px-32 py-4 lg:py-6 ">
            <Link className="w-fit flex justify-start items-center gap-1" href={'/'}>
            <Back/>
            <span className="text-md font-medium">Back to Catalog</span></Link>
            
            </div>
            <div className="w-full px-6 lg:px-32 py-8 lg:py-12 ">
                <CartHeader/>
    
                <div className=" w-full flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-12 lg:gap-20">
                    <div className="flex flex-col divide-y divide-accent-gray">
                        {items.map((element, index)=>{
                            return(<div className="py-5 px-4 " key={index}>
                                <CartItem onRemove={()=>removeItem(element.id)} game={element}  key={element.id}/>
                            </div>)
                            })}

                        {items.length == 0 && <div className='lg:min-w-96'>
                            <h1>Empty cart</h1></div>}
    
                    </div>
                    
                    <div className=' w-full max-w-[522px] flex flex-col gap-10'>
                    <OrderSummary/>
                   
                        <Button type='main' label='Checkout' onClick={()=>{}} />
                
                    </div>
                    
                </div>
                
                
                
              
            </div>
            </>
            
        )
    
};

export default Cart;