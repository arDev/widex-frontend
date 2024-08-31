import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import  useStock  from "../../hooks/useStock"

import "./Ordenes.css";
import { IComprobante } from "../../Interfaces/IComprobante";
const Ordenes = () => {
  const { data, cargando } = useStock("http://localhost:5000/Stock/Listar");
  const [buscar, setBuscar] = useState("");
  const [prueba, setPrueba] = useState("Inicio");
 

  const productoBusqueda = (e: any) => {
    setBuscar(e.target.value);
  };

  const resultado = !buscar
    ? data
    : data.filter(
        (dato: IComprobante) =>
          dato.razon_soci.toLowerCase().includes(buscar.toLocaleLowerCase()) ||
          dato.fecha_pedi.includes(buscar)
      );

  
  const verOrden = (p:any ) => {
    //navigate("/verorden");
    
    localStorage.setItem("Holis",JSON.stringify({"hola":p}))
    const a = localStorage.getItem("Holis")
    if(a!=null)
        setPrueba(a)
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
                className="btn btn-info float-end btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={() => verOrden( orden.nro_pedido)}
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
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Su Pedido</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{prueba}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Seguir Comprando</button>
                            <button type="button" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  );
};

export default Ordenes;

