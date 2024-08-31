import { useState } from "react";
import { userStore } from "../../stores/userStore";

import { IProducto } from "../../Interfaces/IProducto";

import "../../estilos/estilos.css"

const Producto = (paramProducto: any) => {
  const agregarProducto  = userStore(state => state.agregarProducto)

  const [contador, setContador] = useState(0);
  const [producto, setProducto] = useState<IProducto>(paramProducto.paramProducto);

  const AgregarProducto = () => {
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
    <tr key={producto.id}>
      <td><img className="imgProducto" src="https://eshop.widex.pro/-/media/Global/BABY/Baby%20440%20BTE/BABY440-rite-Pearlwhite.ashx" alt="fotoprueba" width={100} height={100} /></td>
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
            onClick={() => AgregarProducto()}
          >
            Agregar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Producto;
