import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Catalog from './Catalog'
import { getItems } from '@/services/items-service';




jest.mock('next/navigation', () => ({
    useRouter() {
      return {
        prefetch: () => null,
      };
    },
    useSearchParams(){
        return{
            get:() =>{}
        }
    }
  }));

 jest.mock('../../services/items-service', () =>({
    getItems: jest.fn()
 }));

 const data = {games: [
    {
      id: "1",
      genre: "Action",
      image: "/game-images/cyberpunk2077.jpeg",
      name: "Cyberpunk 2077",
      description: "An open-world, action-adventure story set in Night City.",
      price: 59.99,
      isNew: true,
    },
    {
      id: "2",
      genre: "RPG",
      image: "/game-images/thewitcher3.jpeg",
      name: "The Witcher 3: Wild Hunt",
      description:
        "A story-driven, next-generation open world role-playing game.",
      price: 39.99,
      isNew: false,
    },
    {
      id: "3",
      genre: "Adventure",
      image: "/game-images/zeldabotw.jpeg",
      name: "The Legend of Zelda: Breath of the Wild",
      description:
        "An epic adventure that breaks boundaries in the Zelda series.",
      price: 59.99,
      isNew: true,
    },
    {
      id: "4",
      genre: "Action",
      image: "/game-images/gta5.jpeg",
      name: "Grand Theft Auto V",
      description:
        "An action-adventure game set in the sprawling city of Los Santos.",
      price: 29.99,
      isNew: false,
    }],
    availableFilters: ['Action', 'RPG', 'Adventure'],
    totalPages: 3}

const dataNoMorePages = {...data, totalPages: 1};

const dataWithNoItems = {games: [], availableFilters: [], totalPages: 0}



describe('Catalog tests with items and pages to see', () => {

    const mock = getItems as jest.Mock

    beforeEach(async()=>{
    jest.clearAllMocks();
    mock.mockResolvedValue(data);
    
    const component = await Catalog({genre:'', page:'1'})
     render(component)
 
    });


  it('renders the catalog', async() => {
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
  });

  it('shows the first item', async()=>{
    const firstItemTitle = screen.getByText(data.games[0].name);
    expect(firstItemTitle).toBeInTheDocument();
  })

  it('shows see more Button', async()=>{
    const seeMoreButton = screen.queryByText('See More')
    expect(seeMoreButton).toBeInTheDocument();
  })
})

describe('Catalog tests with items and no more pages to see', () => {

    const mock = getItems as jest.Mock

    beforeEach(async()=>{
        jest.clearAllMocks();
    mock.mockResolvedValue(dataNoMorePages);
    
    const component = await Catalog({genre:'', page:'1'})
     render(component)
    });


  it('renders the catalog', async() => {
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
  });

  it('shows the first item', async()=>{
    const firstItemTitle = screen.getByText(data.games[0].name);
    expect(firstItemTitle).toBeInTheDocument();
  })

  it('dosent show see more Button', async()=>{
    const seeMoreButton = screen.queryByText('See More')
    expect(seeMoreButton).not.toBeInTheDocument();
  })
});

describe('Catalog tests with no items', () => {
    
    const mock = getItems as jest.Mock

    beforeEach(async()=>{
    jest.clearAllMocks();
    mock.mockResolvedValue(dataWithNoItems);
    
    const component = await Catalog({genre:'', page:'1'})
     render(component)
    });


  it('renders the catalog', async() => {
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
  });

  it('dosent show the first item', async()=>{
    const firstItemTitle = screen.queryByText(data.games[0].name);
    expect(firstItemTitle).not.toBeInTheDocument();
  })

  it('dosent show see more Button', async()=>{
    const seeMoreButton = screen.queryByText('See More')
    expect(seeMoreButton).not.toBeInTheDocument();
  })
})