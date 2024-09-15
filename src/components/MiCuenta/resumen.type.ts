export type Resumen =  {
id : number,
orden: number,
t_comp : string
n_comp : string
estado : string
fecha : string
importe : number
pendiente: number
}

export type Comprobantes = {
    pendientes: Resumen[],
    cancelados: Resumen[]
}