import Link from 'next/link';
import React from 'react';
import Cart from '../../../../public/Icons/Cart';

const HeaderNav: React.FC = () => {
    return (
        <nav className='w-[80%] flex justify-between items-center'>
            
                <Link href={'/'}>
                <h4 >GamerShop</h4></Link>
                
                <Link href={'/cart'}>
                <Cart/></Link>
                
        
        </nav>
    );
};

export default HeaderNav;