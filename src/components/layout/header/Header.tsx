import React from 'react';
import HeaderNav from './HeaderNav';


const Header: React.FC = () => {
    return (
        <header className='w-full flex justify-center items-center h-16 bg-header-gray'>
          <HeaderNav/>  
        </header>
    );
};

export default Header;