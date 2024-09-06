import { useEffect, useState } from "react";
import { userStore } from "../../stores/userStore";

const Orden = (props: any) => {
  const token = userStore(state => state.usuario?.token)
  const [data, setData] = useState<any>([]);
  
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    
    fetch("http://localhost:5000/Stock/Listar/" + props.pId, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => {
        console.log(error);

      });
  }
    , [props.pId])

  return (
    <>
    { data.orden == null ? <></> :
      <section className="py-1 py-md-7">
        <div >
          <div className="row ">
            <div className="col-12 ">
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-md-8">
                  <address>
                    <strong>{data.orden.razon_soci}</strong><br />
                    {data.orden.cuit}<br />
                    {data.orden.domicilio}<br />
                    {data.orden.localidad}<br />
                    {data.orden.nombre_pro}<br />
                    Email: email@client.com
                  </address>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <h4 className="row">
                    <span className="col-6">Nro #</span>
                    <span className="col-6 text-sm-end">{data.orden.nro_pedido}</span>
                  </h4>
                  <div className="row">
                    <span className="col-6">Fecha</span>
                    <span className="col-6 text-sm-end">{data.orden.fecha_pedi}</span>
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
                      {
                        data.orden.items.map( (i: any) => (
                          <tr key={i.cod_articu}>
                          <th scope="row">{(i.cantidad).toFixed(2)}</th>
                          <td>{i.cod_articu} - {i.descripcion}</td>
                          <td className="text-end">{(i.precio).toFixed(2)}</td>
                          <td className="text-end">{(i.importe).toFixed(2)}</td>
                        </tr>
                        ))
                      }
                                        <tr>
                    <td colSpan={3} className="text-end">Subtotal</td>
                    <td className="text-end">{(data.orden.subtotal).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-end">VAT (21%)</td>
                    <td className="text-end">{(data.orden.iva).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan={3} className="text-uppercase text-end">Total</th>
                    <td className="text-end">${(data.orden.total).toFixed(2)}</td>
                  </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  }
       </>
  
  );
}

export default Orden;