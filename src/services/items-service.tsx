interface GetItemsProps {
    genre?: string | null;
    page?: string;
}

const getItems = async({genre = null, page = '1'}: GetItemsProps)=>{

   try{
    const params = new URLSearchParams();
    if(genre){
        params.append('genre', genre)
    }
    if(page){
        params.append('page', page)
    }
    const url = `${process.env.API_BASE_URL}/api/games?${params.toString()}`;
    
    const response = await fetch(url, {
        method: 'GET',
        cache: "no-cache"
    })


    if (!response.ok) {
        throw new Error(`Error fetching games: ${response.statusText}`);
    }
    
    return await response.json()
    
   }
   catch(e){
    console.error('Error getting games data',e)
   }


    
}

export {getItems}