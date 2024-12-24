interface GetItemsProps {
    genre?: string | null;
    page?: string;
}

const getItems = async({genre = null, page = '1'}: GetItemsProps)=>{

    const params = new URLSearchParams();
    if(genre){
        params.append('genre', genre)
    }
    if(page){
        params.append('page', page)
    }
    const url = `${process.env.API_BASE_URL}/api/games?${params.toString()}`;
    
    const data = await fetch(url, {
        method: 'GET',
        cache: "no-cache"
    })

    return data.json()
}

export {getItems}