import { useState } from "react";
import useStock from "../../hooks/useStock"
import "./Ordenes.css";
import "../../estilos/estilos.css"
import { IComprobante } from "../../Interfaces/IComprobante";
import Orden from "../Orden/Orden";
import Busqueda from "../Busqueda";

const Ordenes = () => {
  const { data, cargando } = useStock("http://localhost:5000/Stock/Listar");
  const [buscar, setBuscar] = useState("");
  const [id, setId] = useState<number>(0);

  const productoBusqueda = (e: any) => {
    setBuscar(e.target.value);
  };

  const resultado = !buscar
    ? data
    : data.filter(
      (dato: IComprobante) =>
        dato.nro_pedido.toLowerCase().includes(buscar.toLocaleLowerCase()) ||
        dato.razon_soci.toLowerCase().includes(buscar.toLocaleLowerCase()) ||
        dato.fecha_pedi.includes(buscar)
    );

  const verOrden = (p: number) => {
    setId(p)
  };

  const estado = (param: number) => {
    switch (param) {
      case 1:
        return <span className="badge bg-warning text-dark" >Ingresado</span>
      case 2:
        return <span className="badge bg-success" >Aprobado</span>
      case 3:
        return <span className="badge bg-secondary" >Cumplido</span>
      default:
        return <></>
    }
  }

  const facturado = (param: number, estado: number) => {
    if (estado == 2)
      if (param <= 0)
        return "facturado"
      else
        return " falta facturar"
  }

  const remitido = (param: number, estado: number) => {
    if (estado == 2)
      if (param <= 0)
        return " y remitido"
      else
        return " y falta remitir"
  }

  return (
    <div className="container">
      <h2>Mis Ordenes</h2>
      <hr />
      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-50  "
        placeholder="Buscar Orden"
        onChange={productoBusqueda}
        value={buscar} />
      <div className="tabla-busqueda">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Numero</th>
              { //<th>Cliente</th> 
              }
              
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group" >
            {resultado.length === 0 ? (

              <tr>
                <td colSpan={5}>
                  <div className="d-flex justify-cotents-center">
                    <p>No se encontro ningun pedido</p>
                  </div>
                </td>
              </tr>


            ) : (
              cargando ??
              resultado.map((orden: any) => (
                <tr key={orden.id}>
                  <td>{orden.fecha_pedi}</td>
                  <td>{orden.tipo}</td>
                  <td>{orden.nro_pedido}</td>
                  { //<td>{orden.razon_soci}</td>
                  }
                  
                  <td>{estado(orden.estado)}
                    {orden.estado == 2 ?
                      <div
                        className="badge bg-light text-dark"
                      >{facturado(orden.aRemitir, orden.estado)}
                        {remitido(orden.aFacturar, orden.estado)}
                      </div> : <></>
                    }
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn float-end btn-sm btn-widex"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={() => verOrden(orden.id)}
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
              <Orden pId={id} />
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

