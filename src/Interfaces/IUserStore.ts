
import { IProducto } from "./IProducto"
import { IUser } from "./IUser"

export interface IUserStore  {
    id: number,
    nombre: string,
    logueado: boolean,
    usuario?: IUser,
    items: IProducto[],
    agregarProducto: (producto: IProducto) => void,
    borrarProducto: (producto: IProducto) => void,
    setNombre: (p: string) => void,
    setUser: (p?: IUser | undefined) => void,
    logout: () => void
}
