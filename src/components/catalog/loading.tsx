import { CatalogItemSkeleton } from "./CatalogItemSkeleton"

export default function Loading() {
    
    return (
        <div className="flex flex-col text-center items-center justify-center w-full h-full min-h-screen p-4 ">
          <div className="h-24 w-full flex justify-center items-center animate-pulse text-center text-2xl"> Loading...</div>
          <div className=" w-full grid grid-cols-[repeat(auto-fill,minmax(327px,1fr))] place-items-center gap-12">
          {Array.from({length:8}).map((skeleton, id) => {
            return(<CatalogItemSkeleton key={id}/>)
          })}
        </div>
      </div>
    )
  }