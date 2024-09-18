import { userStore } from "../stores/userStore";
import { CgCloseR } from "react-icons/cg";

const CarritoStock = () => {
    const items = userStore(state => state.items);
    const borrarProducto = userStore(state => state.borrarProducto);
    const agregarProducto = userStore(state => state.agregarProducto);

    const aumentarCantidad = (producto: any) => {
        agregarProducto({ ...producto, cantidad: +1 }); 
    };

    const disminuirCantidad = (producto: any) => {
        if (producto.cantidad > 1) {
            agregarProducto({ ...producto, cantidad: -1 }); 
        } else {
            borrarProducto(producto); 
        }
    };

    return (
        <>
            <tbody className="table-group-divider">
                {items.map((product) => (
                    <tr key={product.id}>
                        <td>
                            <img
                                className="imgProducto"
                                src="https://eshop.widex.pro/-/media/Global/BABY/Baby%20440%20BTE/BABY440-rite-Pearlwhite.ashx"
                                alt="fotoprueba"
                            />
                        </td>
                        <td>{product.descripcion}</td>
                        <td>
                            <div className="controles">
                                <button
                                    className="botonesSumaResta btn-widex"
                                    onClick={() => disminuirCantidad(product)}
                                >
                                    -
                                </button>
                                <div>{product.cantidad}</div>
                                <button
                                    className="botonesSumaResta btn-widex"
                                    onClick={() => aumentarCantidad(product)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td>$ {product.precio}</td>
                        <td>$ {product.cantidad * product.precio}</td>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => borrarProducto(product)}
                                >
                                    <CgCloseR />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
};

export default CarritoStock;
