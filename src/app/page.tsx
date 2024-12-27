import Catalog from "@/components/catalog/Catalog";
import Loading from "@/components/catalog/loading";
import { Suspense } from "react";



export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {

const genre = (await (searchParams)).genre
const page = (await (searchParams)).page


  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      
      <div className="w-full px-6 lg:px-32">
        <Suspense key={genre} fallback={<Loading></Loading>}>
        <Catalog page={page} genre={genre}></Catalog>
        </Suspense>
        
      </div>
    
      
    </main>
  )
}
