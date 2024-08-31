import { userStore } from "../stores/userStore";
import { IProducto } from "../Interfaces/IProducto";

const Delete = (p: IProducto) => { }

import "./PedidoStock.css"
import CarritoStock from "./CarritoStock";
import Busqueda from "./Busqueda";
import { useState } from "react";

const PedidoStock = () => {

  return (
    <>
            <table className="table table-hover table-bordered ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Importe</th>
                  </tr>
                </thead>
                <CarritoStock />
              </table>
    </>
  );
};

export default PedidoStock;