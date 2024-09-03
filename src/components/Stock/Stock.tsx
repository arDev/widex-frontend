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
    const [productos, setProductos] = useState<IProducto[]>([]);
    const tk = userStore(state => state.usuario?.token);
    const items = userStore(state => state.items);
    const idFolder = userStore(state => state.idFolder);
    const Actualizar = async () => {
        const URL = "http://localhost:5000/";
        const showData = async () => {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + tk);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
            };
            try {
                const response = await fetch(URL + "Productos/Listar/" + idFolder, requestOptions);
                const result = await response.text();
                const data = JSON.parse(result);
                setProductos(data as IProducto[]);
            } catch (error) {
                console.error(error);
            }
        };
        showData();
    };
    useEffect(() => {
        Actualizar();
    }, [idFolder]);
    const [buscar, setBuscar] = useState("");

    const productoBusqueda = (e: any) => {
        setBuscar(e.target.value);
    };
    const resultado = !buscar
        ? productos
        : productos.filter(
            (dato: IProducto) =>
                dato.descripcion.toLowerCase().includes(buscar.toLowerCase()) ||
                dato.codigo.includes(buscar)
        );
    return (
        <div className="container">
            <div className="row ">
                <div className="col ">
                    <legend>Categorias</legend>
                </div>
                <div className="col mt-2">
                    <button
                        type="button"
                        className="btn btn-primary float-end btn-pedido"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Ver Pedido ({items.length}) <FaBasketShopping className="ms-2" />
                    </button>
                </div>
            </div>
            <Categorias />
            <Busqueda
                className1="d-flex flex-row justify-content-center m-4"
                className2="form-control border border-dark-subtle w-50"
                onChange={productoBusqueda}
                value={buscar}
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
                    {resultado.map((p) => (
                        <Producto key={p.codigo} paramProducto={p} />
                    ))}
                </tbody>
            </table>
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
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
