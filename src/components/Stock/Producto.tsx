import { useState } from "react";
import { userStore } from "../../stores/userStore";

import "../../estilos/estilos.css"

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
      <td>
        <div className="controles">
          <button className="botonesSumaResta btn-widex" onClick={restar}>
            -
          </button>
          <div>{contador}</div>
          <button className="botonesSumaResta btn-widex" onClick={sumar}>
            +
          </button>
        </div>
      </td>
      <td>
        <div className="boton-agregar">
          <button
            type="button"
            className="agregar-boton"
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
