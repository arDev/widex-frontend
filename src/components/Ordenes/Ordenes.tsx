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
        dato.razon_soci.toLowerCase().includes(buscar.toLocaleLowerCase()) ||
        dato.fecha_pedi.includes(buscar)
    );

  const verOrden = (p: number) => {
    setId(p)
  };

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
              <th>Numero</th>
              <th>Tipo</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
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

