import "../../estilos/estilos.css"
import logo from "../../assets/imagenes/widex-logo-solo.png"
import { IOrden } from "../../Interfaces/IOrden";
import { useEffect } from "react";

const Orden = (order: any) => {

useEffect(() => { console.log(order) },[order])

return (
<>

<section className="py-1 py-md-7">
  <div >
    <div className="row ">
      <div className="col-12 ">
        <div className="row mb-3">
          <div className="col-12 col-sm-6 col-md-8">
            <h4>Cliente</h4>
            <address>
              <strong>Mason Carter</strong><br />
              7657 NW Prairie View Rd<br />
              Kansas City, Mississippi, 64151<br />
              United States<br />
              Phone: (816) 741-5790<br />
              Email: email@client.com
            </address>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h4 className="row">
              <span className="col-6">Nro #</span>
              <span className="col-6 text-sm-end">{order.order?.nro_pedido}</span>
            </h4>
            <div className="row">
              <span className="col-6">Codigo cliente</span>
              <span className="col-6 text-sm-end">{order.order?.cod_client}</span>
              <span className="col-6">Fecha order</span>
              <span className="col-6 text-sm-end">12/10/2025</span>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" className="text-uppercase">Cant.</th>
                    <th scope="col" className="text-uppercase">Producto</th>
                    <th scope="col" className="text-uppercase text-end">Precio</th>
                    <th scope="col" className="text-uppercase text-end">Importe</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">2</th>
                    <td>Console - Bootstrap Admin Template</td>
                    <td className="text-end">75</td>
                    <td className="text-end">150</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Planet - Bootstrap Blog Template</td>
                    <td className="text-end">29</td>
                    <td className="text-end">29</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Hello - Bootstrap Business Template</td>
                    <td className="text-end">32</td>
                    <td className="text-end">128</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Palette - Bootstrap Startup Template</td>
                    <td className="text-end">55</td>
                    <td className="text-end">55</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-end">Subtotal</td>
                    <td className="text-end">362</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-end">IVA (21%)</td>
                    <td className="text-end">18.1</td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan={3} className="text-uppercase text-end">Total</th>
                    <td className="text-end">$495.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
);
}

export default Orden;