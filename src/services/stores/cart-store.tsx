
import { Game } from '@/utils/endpoint';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface CartStore{
    items: Game[],
    addItem: (game: Game)=>void,
    removeItem: (id: string) =>void

}

export const useCartStore = create(persist<CartStore>((set) => ({
  items: [],
  removeItem:(id) => set((state)=> ({
    items: state.items.filter(item => item.id !== id)
  })),
  addItem:(game) => set((state)=>{
   const existingItem =  state.items.find(item => item.id == game.id);
   if(existingItem) return state;
   
   return({items: [...state.items, game]})
  }),

}),{name: 'game-items-ids'})
  )