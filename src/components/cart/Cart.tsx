'use client'
import mockupData from '@/utils/mockData';
import Link from 'next/link';
import React from 'react';
import Back from '../../../public/Icons/Back';
import Button from '../common/Button';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const Cart: React.FC = () => {
   
        return (
            <>
            
            <div className="w-full px-6 lg:px-32 py-4 lg:py-6 ">
            <Link className="w-fit flex justify-start items-center gap-1" href={'/'}>
            <Back/>
            <span className="text-md font-medium">Back to Catalog</span></Link>
            
            </div>
            <div className="w-full px-6 lg:px-32 py-8 lg:py-12 ">
                <CartHeader/>
    
                <div className=" w-full flex flex-col items-center lg:items-start lg:flex-row gap-12 lg:gap-20">
                    <div className="flex flex-col divide-y divide-accent-gray">
                        {mockupData.map((element, index)=>{
                            return(<div className="py-5 px-4 " key={index}>
                                <CartItem description={element.description} genre={element.genre} imageUrl={element.image} name={element.name} price={element.price} key={element.id} id={element.id}/>
                            </div>)
                            })}
    
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