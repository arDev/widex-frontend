import { useState } from "react";

import  useStock  from "../../hooks/useStock"

import "./Ordenes.css";
import "../../estilos/estilos.css"

import { IComprobante } from "../../Interfaces/IComprobante";
import { IOrden } from "../../Interfaces/IOrden";
import Orden from "../Orden/Orden";
const Ordenes = () => {
  const { data, cargando } = useStock("http://localhost:5000/Stock/Listar");
  const [buscar, setBuscar] = useState("");
  const [order, setOrder] = useState<IOrden | null>(null);
 


  const resultado = !buscar
    ? data
    : data.filter(
        (dato: IComprobante) =>
          dato.razon_soci.toLowerCase().includes(buscar.toLocaleLowerCase()) ||
          dato.fecha_pedi.includes(buscar)
      );

  
  const verOrden = (p:any ) => {
    //navigate("/verorden");
    
    setOrder({ nro_pedido : p.nro_pedido, cod_client : "Algo"})
  };

  return (
    <div className="container">
      <div className="tabla-busqueda">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Tipo</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody className="table-group" >
            {resultado.length === 0 ? (
              <div className="d-flex justify-cotents-center">
                <p>No se encontro ningun pedido</p>
              </div>
            ) : (
              cargando ??
              resultado.map((orden) => (
                <tr key={orden.id}>
                  <td>{orden.nro_pedido}</td>
                  <td>{orden.tipo}</td>
                  <td>{orden.razon_soci}</td>
                  <td>{orden.fecha_pedi}</td>
                  <td>{orden.estado} 

                  <button
                type="button"
                className="btn float-end btn-sm btn-widex"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={() => verOrden( orden)}
            >
                Ver
            </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


      <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Orden de Stock</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <Orden order={order}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Ordenes;

