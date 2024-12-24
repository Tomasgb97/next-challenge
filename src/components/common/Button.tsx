'use client'
import React, { useMemo } from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    type? : string;
}

const buttonTypes: { [key: string]: string } = {
    outline: 'border border-1 border-accent-black hover:bg-accent-gray/10 ',
    main: 'bg-main-gray text-[#FFFFFF]'
};


const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, type = '' }) => {

    const typeClass = useMemo(()=> {return buttonTypes[type] || ''}, [type]);
    
    
    return (
        <button className={`w-full min-h-14 rounded-lg font-bold   ${typeClass}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;