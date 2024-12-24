import Catalog from "@/components/catalog/Catalog";
import Loading from "@/app/loading";
import { getItems } from "@/services/items-service";
import { Suspense } from "react";


export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {

const genre = (await (searchParams)).genre
const page = (await (searchParams)).page

  
  const data = await getItems({ genre: genre, page: page });

  const games = data.games
  const categories = data.availableFilters || ['']

  

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Suspense fallback={<Loading />}>
      <div className="w-full px-6 lg:px-32">
        <Catalog filters={categories} games={games}></Catalog>
      </div>
      </Suspense>
      
    </main>
  )
}
