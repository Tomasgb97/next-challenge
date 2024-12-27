import React, { Suspense } from 'react';
import Container from './Container';
import CatalogItem from './CatalogItem';
import GenreSection from './GenreSection';

import { getItems } from '@/services/items-service';
import { Game } from '@/utils/endpoint';



interface CatalogProps{
  genre: string | undefined;
  page: string | undefined;
}
const Catalog: React.FC<CatalogProps> = async({genre, page}) => {

  
  const data = await getItems({ genre: genre, page: page });

  const games = data.games
  const categories = data.availableFilters || ['']
    return (
  
        <div className='w-full'>
        <GenreSection filters={categories}/>
        <div className='py-7'>    
          <Container>
          {games.length > 0 && games.map((item: Game) => (
            <CatalogItem game={item} key={item.id}/>
          ))}
        </Container>
      
        </div>

        </div>

        
    );
};

export default Catalog;