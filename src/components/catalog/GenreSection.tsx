import React from 'react';
import GenreSelector from './GenreSelector';
interface GenreSectionProps{
    filters: string[]
}
const GenreSection: React.FC<GenreSectionProps> = ({filters}) => {
    return (
        <div className="gap-8 flex flex-col py-7 ">
            <h2 className='text-4xl font-bold'>TOP SELLERS</h2>

            <div className='w-full'>
                <GenreSelector filters={filters}/>
            </div>
            
        </div>
    );
};

export default GenreSection;