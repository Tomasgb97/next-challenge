import React from 'react';
import Container from './Container';
import CatalogItem from './CatalogItem';
import GenreSection from './GenreSection';
import { getItems } from '@/services/items-service';
import { Game } from '@/utils/endpoint';
import Button from '../common/Button';
import Link from 'next/link';



interface CatalogProps{
  genre: string | undefined;
  page: string | undefined;
}
const Catalog: React.FC<CatalogProps> = async({genre, page = '1'}) => {

  
  const data = await getItems({ genre: genre, page: page });

  const games = data.games;
  const categories = data.availableFilters || [''];
  const totalPages = data.totalPages;
  const nextPage = (parseInt(page) + 1).toString();

  const params = new URLSearchParams();
  if(genre){params.append('genre', genre)}
  params.append('page', nextPage);

    return (
  
        <div className='w-full'>
        <GenreSection filters={categories}/>
        <div className='py-7'>    
          <Container>
          {games && games.map((item: Game) => (
            <CatalogItem game={item} key={item.id}/>
          ))}
        </Container>
        </div>
          {totalPages > parseInt(page) && <div className='w-full flex justify-center items-center'>
            <Link className='w-[40%] p-3' href={`/?${params}`}>
            <Button type='main' label='See More '></Button></Link>
            
          </div>}
        </div>

        
    );
};

export default Catalog;