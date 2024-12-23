import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='w-full h-44 flex justify-center items-center bg-footer-gray'>
            <div className='max-w-44 object-contain'>
            <img className='w-full h-full' src="/brand/Apply-digital-big.png" alt="Apply Digital brand logo - big" />
            </div>
            
        </footer>
    );
};

export default Footer;