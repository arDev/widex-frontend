import { useEffect, useState } from "react";
import { resumen } from "./resumen.type";

const Tabla = (props: any) => {
    const { titulo, comps, ActualizarImporte } = props
    const [comprobantes, setComprobantes] = useState<resumen[]>([]);

    const checkClick = (e: any, importeCheck: any) => {
        if (e.target.checked) ActualizarImporte(Number(importeCheck));
        else ActualizarImporte(Number(importeCheck * -1))
    };

    useEffect(() => {
        setComprobantes(comps);
    }, [comps]);

    return (
        <>
            <div className="tabla-micuenta">
                <legend>{titulo}</legend>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Fecha</th>
                            <th>Tipo</th>
                            <th>Nro</th>
                            <th>Fecha vto</th>
                            <th className="text-end" align="right">Importe</th>
                        </tr>
                    </thead>
                    <tbody className="table-group">
                        {comprobantes == undefined ? (
                            <tr></tr>
                        ) : (
                            comprobantes.map((x: resumen) => (
                                <tr key={x.id}>
                                    {x.pendiente <= 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>
                                            {
                                            x.estado == "PEN" ?
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox"
                                                onClick={(e) => checkClick(e, x.pendiente.toFixed(2))}
                                            /> : <></>
                                            }
                                        </td>
                                    )}
                                    <td>{x.estado}</td>
                                    <td>{x.t_comp}</td>
                                    <td>{x.n_comp}</td>
                                    <td>{x.fecha}</td>
                                    <td align="right">{x.pendiente.toFixed(2)}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tabla;
