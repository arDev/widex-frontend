import "./PedidoStock.css"
import CarritoStock from "./CarritoStock";

const PedidoStock = () => {

  return (
    <>
        <table className="table table-hover ">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Importe</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <CarritoStock />
         </table>
         <div className="d-flex justify-content-end">
          <h5>Total: $236.256</h5>
          </div>
         
    </>
  );
};

export default PedidoStock;