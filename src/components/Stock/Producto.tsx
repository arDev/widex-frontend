import { useState } from "react";
import { userStore } from "../../stores/userStore";

const Producto = ({producto}: any) => {
  const agregarProducto  = userStore(state => state.agregarProducto)

  const [contador, setContador] = useState(0);

  const AgregarProducto = (producto: any) => {
    if (contador === 0) {
      alert("No se puede agregar un producto con cantidad 0");
      return;
    }

    agregarProducto({ ...producto, cantidad: contador });
    setContador(0);
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
      <>
      <td><img className="imgProducto" src="https://eshop.widex.pro/-/media/Global/BABY/Baby%20440%20BTE/BABY440-rite-Pearlwhite.ashx" alt="fotoprueba" width={100} height={100} /></td>
      <td>{producto.codigo}</td>
      <td>{producto.descripcion}</td>
      <td>${producto.precio}</td>
      <td className="boton">
        <div className="d-flex align-items-center">
          <button className="btn  btn-sm me-2" onClick={restar}>
            -
          </button>
          <div>{contador}</div>
          <button className="btn btn-sm ms-2" onClick={sumar}>
            +
          </button>
        </div>
      </td>
      <td className="boton">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-sm border-radius w-100"
            onClick={() => AgregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      </td>
    </>
  );
};

export default Producto;
