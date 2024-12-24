import React from 'react';
import Container from './Container';
import mockupData from '@/utils/mockData';
import CatalogItem from './CatalogItem';
import GenreSection from './GenreSection';

const Catalog: React.FC = () => {
    return (
        <div className='w-full'>
        <GenreSection/>
        <div className='py-7'>
        <Container>
          {mockupData.map((item) => (
            <CatalogItem description={item.description} genre={item.genre} id={item.id} imageUrl={item.image} isNew={item.isNew} name={item.name} price={item.price} key={item.id}/>
          ))}
        </Container>
        </div>
        
        </div>
    );
};

export default Catalog;