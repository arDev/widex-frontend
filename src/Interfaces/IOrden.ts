import { IProducto } from "./IProducto"

export interface IOrden {

    cod_client: string,
    nro_pedido: string,
    items: IProducto[]
}