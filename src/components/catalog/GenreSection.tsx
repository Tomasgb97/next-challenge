import React from 'react';
import GenreSelector from './GenreSelector';

const GenreSection: React.FC = () => {
    return (
        <div className="genre-section py-7 ">
            <h2 className='text-4xl font-bold'>TOP SELLERS</h2>

            <div className='w-full'>
                <GenreSelector/>
            </div>
            
        </div>
    );
};

export default GenreSection;