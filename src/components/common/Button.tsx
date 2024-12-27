'use client'
import React, { useMemo } from 'react';

interface ButtonProps {
    onClick?: () => void;
    label: string;
    disabled?: boolean;
    type? : 'main' | 'outline';
    status?: string;
}

const buttonTypes: { [key: string]: string } = {
    outline: 'border border-1 border-accent-black hover:bg-accent-gray/10 ',
    main: 'bg-main-gray text-[#FFFFFF]',
};

const buttonStatus:  { [key: string]: string } = {
    alert: 'bg-alert-red text-[#FFFFFF] hover:bg-alert-red '
}


const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, type = '', status = '' }) => {

    const typeClass = useMemo(()=> {return buttonTypes[type] || ''}, [type]);
    const statusClass = useMemo(()=> {return buttonStatus[status] || ''}, [status]);
    
    
    return (
        <button className={`w-full min-h-14 rounded-lg font-bold   ${typeClass} ${statusClass}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;