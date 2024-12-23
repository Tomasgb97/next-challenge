import CatalogItem from "@/components/catalog/CatalogItem";
import Container from "@/components/catalog/Container";

export default async function Home() {
  const mockupData = [
    {
        id: 1,
        genre: "Fiction",
        image: "/game-images/amongus.jpeg",
        name: "The Enchanted Forest",
        description: "A captivating tale of adventure and mystery in a magical forest.",
        price: 20,
        isNew: true,
    },
    {
        id: 2,
        genre: "Science",
        image: "/game-images/ageofempiresII.jpeg",
        name: "Understanding the Cosmos",
        description: "An insightful book exploring the wonders of the universe.",
        price: 25,
        isNew: false,
    },
    {
        id: 3,
        genre: "Fantasy",
        image: "/game-images/celeste.jpeg",
        name: "Dragon Chronicles",
        description: "An epic saga of dragons, heroes, and ancient lore.",
        price: 30,
        isNew: true,
    },
    {
        id: 4,
        genre: "History",
        image: "/game-images/freefire.jpeg",
        name: "The Lost Kingdoms",
        description: "A journey through the rise and fall of ancient civilizations.",
        price: 15,
        isNew: false,
    },
];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className="w-full px-6 md:px-32 py-12">
        <Container>
          {mockupData.map((item) => (
            <CatalogItem description={item.description} genre={item.genre} id={item.id} imageUrl={item.image} isNew={item.isNew} name={item.name} price={item.price} key={item.id}/>
          ))}
        </Container>
      </div>
    </main>
  )
}
