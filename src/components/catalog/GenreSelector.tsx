'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react';



const GenreSelector: React.FC = () => {


   const router = useRouter()
   const searchParams = useSearchParams();

   const selectedGenre = searchParams.get('genre')  || 'All' ;


   const handleChange = (event: { target: { value: any; }; }) => {
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
        <div className='w-full  flex justify-end'>
            <div className='flex'>
            <span className='text-md font-bold select-none'>Genre</span>
            <div className='w-px bg-accent-black h-full mx-3'></div>
            <select onChange={((e)=> handleChange(e))} value={selectedGenre}  className='border-l-1 min-w-40 text-md text-accent-gray focus-visible:outline-none'>
                    <option value="All">All</option>
                    <option value="History">History</option>
                    <option value="Science">Science</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Biography">Biography</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Battle Royale"> Battle Royale</option>
            </select>
            </div>
        </div>
    );
};

export default GenreSelector;