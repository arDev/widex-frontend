import { create } from "zustand";
import { IUserStore } from "../Interfaces/IUserStore";
import { IUser } from "../Interfaces/IUser";

export const userStore = create<IUserStore>((set,get) => ({
    id: 1,
    idFolder: "0",
    logueado: false,
    usuario: undefined,
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
    setId: (p: string) => {
        set(() => ({ idFolder: p }))
    },
    setUser: (p?: IUser | undefined) => {
        set(() => ({ usuario: p }))
        set(() => ({ logueado: true }))
        localStorage.setItem("WidexLogin",JSON.stringify(p))
    },
    logout: () => {
        set(() => ({ usuario: undefined }))
        set(() => ({ items: [] }))
        set(() => ({ logueado: false }))
    }
}))