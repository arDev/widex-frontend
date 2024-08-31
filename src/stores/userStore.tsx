import { create } from "zustand";
import { IUserStore } from "../Interfaces/IUserStore";

export const userStore = create<IUserStore>((set,get) => ({
    id: 1,
    nombre: "Un nombre",
    usuario: undefined,
    logueado: false,
    items: [],
    agregarProducto: (producto) =>{
        const { items } = get();
    
        const indice = items.findIndex(item => item.id == producto.id )
    
        if(indice > -1)
        {
            const newItems = items;
            newItems[indice] = {...newItems[indice], cantidad: newItems[indice].cantidad + producto.cantidad}
            set(() => ({ items: newItems }))
        } else
        {
          set((state) => ({items: [...state.items, producto] }))
        }
      },
      borrarProducto: (producto) =>{
        set((state) => ({
            items: state.items.filter((item) => item.id !== producto.id),
          }));
      },
    setNombre: (p: string) => {
        set((state) => ({ nombre: state.nombre + "+" + p }))
    },
    setUser: (p?: IUser | undefined) => {
        set(() => ({ usuario: p }))
        set(() => ({ logueado: true }))
    },
    logout: () => {
        set(() => ({ usuario: undefined }))
        set(() => ({ logueado: false }))
    }
}))