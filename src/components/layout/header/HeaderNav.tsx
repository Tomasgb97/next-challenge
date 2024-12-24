import Link from 'next/link';
import React from 'react';
import Cart from '../../../../public/Icons/Cart';

const HeaderNav: React.FC = () => {
    return (
        <nav className='w-full flex justify-between items-center px-6 md:px-32'>
            
                <Link href={'/'}>
                <h4 className='text-2xl text-title-gray'>GamerShop</h4></Link>
                
                <Link href={'/cart'}>
                <Cart/></Link>
                
        
        </nav>
    );
};

export default HeaderNav;