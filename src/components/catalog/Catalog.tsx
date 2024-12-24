import React from 'react';
import Container from './Container';
import CatalogItem from './CatalogItem';
import GenreSection from './GenreSection';
import { Game } from '@/utils/endpoint';


interface CatalogProps{
  games: Game[] | null;
  filters: string[]
}
const Catalog: React.FC<CatalogProps> = ({games, filters}) => {
    return (
        <div className='w-full'>
        <GenreSection filters={filters}/>
        <div className='py-7'>
         
          <Container>
          {games && games.map((item) => (
            <CatalogItem description={item.description} genre={item.genre} id={item.id} image={item.image} isNew={item.isNew} name={item.name} price={item.price} key={item.id}/>
          ))}
  
        </Container>
        
        
        </div>
        
        </div>
    );
};

export default Catalog;