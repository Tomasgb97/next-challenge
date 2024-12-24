import Catalog from "@/components/catalog/Catalog";


export default async function Home() {
  

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className="w-full px-6 md:px-32">
        <Catalog></Catalog>
      </div>
    </main>
  )
}
