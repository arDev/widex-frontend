
import { IProducto } from "./IProducto"
import { IUser } from "./IUser"

export interface IUserStore  {
    id: number,
    idFolder: string,
    logueado: boolean,
    usuario?: IUser,
    items: IProducto[],
    agregarProducto: (producto: IProducto) => void,
    borrarProducto: (producto: IProducto) => void,
    setId: (p: string) => void,
    setUser: (p?: IUser | undefined) => void,
    logout: () => void,
    vaciar: () => void
}
