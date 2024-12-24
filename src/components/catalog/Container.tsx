import React from 'react';

interface ContainerProps{
    children: React.ReactNode[] | null;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
    return <div className=" w-full grid grid-cols-[repeat(auto-fill,minmax(327px,1fr))] place-items-center gap-12">
    {children}
    </div>
};

export default Container;