export const CatalogItemSkeleton =() =>{
    return (
        <div className="w-full flex flex-col gap-5 animate-pulse bg-main-gray/80 max-w-96 p-6 rounded-2xl">
   
              <div className="relative rounded-t-2xl h-60 "></div>
              
        
              <div className="w-full flex flex-col gap-3">
        
                <div className="h-5 w-32 bg-gray-200 animate-pulse rounded"></div>
                
            
                <div className="flex justify-between items-center">
                  <div className="h-6 w-48 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-6 w-16 bg-gray-200 animate-pulse rounded"></div>
                </div>
                
           
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
    )
}
