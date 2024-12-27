
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface CartStore{
    items: { id: string }[],
    addItem: (id: string)=>void,
    removeItem: (id: string) =>void

}

export const useCartStore = create(persist<CartStore>((set) => ({
  items: [],
  removeItem:(id) => set((state)=> ({
    items: state.items.filter(item => item.id !== id)
  })),
  addItem:(id) => set((state)=>{
   const existingItem =  state.items.find(item => item.id == id);
   if(existingItem) return state;
   const newItem = { id };
   return({items: [...state.items, newItem]})
  }),
 
}),{name: 'game-items-ids'})
  )