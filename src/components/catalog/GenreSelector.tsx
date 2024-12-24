'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react';

interface GenreSelectorProps{
  filters: string[];
}

const GenreSelector: React.FC<GenreSelectorProps> = ({filters}) => {
   const router = useRouter()
   const searchParams = useSearchParams();

   const selectedGenre = searchParams.get('genre')  || 'All' ;


   const handleChange = (event: { target: { value: any; }; }) => {
    debugger
    const newGenre = event.target.value;

    const params = new URLSearchParams(searchParams.toString());
    if (newGenre && newGenre != 'All') {
      params.set('genre', newGenre);
    } else {
      params.delete('genre');
    }
    router.push(`?${params.toString()}`);
  };
   


    return (
        <div className='w-full  flex justify-start md:justify-end'>
            <div className='flex'>
            <span className='text-md font-bold select-none'>Genre</span>
            <div className='w-px bg-accent-black h-full mx-3'></div>
            <select onChange={((e)=> handleChange(e))} value={selectedGenre}  className='border-l-1 min-w-40 text-md text-accent-gray focus-visible:outline-none'>
                    <option value="All">All</option>
                    {filters.map((filter, index)=>{return(<option key={index} value={filter} >{filter}</option>)})}
            </select>
            </div>
        </div>
    );
};

export default GenreSelector;