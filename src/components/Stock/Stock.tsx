import { useEffect, useState } from "react";
import Producto from "./Producto";
import "./Stock.css"
import "./Producto.css";
import { userStore } from "../../stores/userStore";
import PedidoStock from "../PedidoStock";
import Busqueda from "../Busqueda";
import Categorias from "../Categorias";
import { FaBasketShopping } from "react-icons/fa6";
import { IProducto } from "../../Interfaces/IProducto"

export default function Stock() {
    const [productos, setProductos] = useState<IProducto[]>([])
    const tk = userStore(state => state.usuario?.token)
    const items  = userStore(state => state.items)
    
    const idFolder = userStore(state => state.idFolder)

    const Actualizar = async () => {
        const URL = "http://localhost:5000/";

        const showData = async () => {
            const myHeaders = new Headers();

            myHeaders.append("Authorization", "Bearer " + tk);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
            };
            console.log(URL + "Productos/Listar/" + idFolder)

            fetch(URL + "Productos/Listar/" + idFolder, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    var data = JSON.parse(result);
                    setProductos(data as IProducto[])
                })
                .catch((error) => console.error(error));
        };
        
        showData()
    }

    useEffect(() => {
        Actualizar()
    }, [idFolder]);

    const [buscador, setBuscador] = useState("");

    const busquedaProductos = (e: any) => {
        setBuscador(e.target.value);
      };
    
      const resultado = !buscador
        ? productos
        : productos.filter((dato) =>
            dato.descripcion.toLowerCase().includes(buscador.toLowerCase())
          );

    return (
        <div className="container">
            
            <button
                type="button"
                className="btn btn-primary float-end btn-pedido"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
            >
                Ver Pedido ({items.length}) <FaBasketShopping className="ms-2" />
            </button>

            <Categorias />

            <Busqueda
        className1="d-flex flex-row justify-content-center m-4"
        className2="form-control border border-dark-subtle w-50"
        onChange={busquedaProductos}
        value={buscador}
        placeholder="Buscar Productos"
      />
            <legend>Articulos ({productos.length})</legend>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                       
                       resultado.map((p) => (
                            <Producto paramProducto={p} />
                        ))

                    }
                </tbody>
            </table>

            <div className="modal" id="myModal">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Su Pedido</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <PedidoStock />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Seguir Comprando</button>
                            <button type="button" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


