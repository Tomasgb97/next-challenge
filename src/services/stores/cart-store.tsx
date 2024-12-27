import { Game } from '@/utils/endpoint'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface CartStore{
    items: Game[],
    addItem: (id: string)=>void,
    removeItem: (id: string) =>void

}

export const useCartStore = create(persist((set) => ({
  items: [],
  removeItem:(id: string) => set((state: CartStore)=> ({
    items: state.items.filter(item => item.id !== id)
  })),
  addItem:(id: string) => set((state: CartStore)=>{
   const existingItem =  state.items.find(item => item.id == id);
   if(!existingItem) return {}
   return({items: [...state.items, existingItem]})
  }),
 
}),{name: 'game-items'})
  )