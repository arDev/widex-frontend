import { useEffect, useState } from "react";
import { IComprobante } from "../../Interfaces/IComprobante";
//import "./Tabla.css";

const Tabla = (props: any) => {
    const { titulo, comps, ActualizarImporte } = props
    const [comprobantes, setComprobantes] = useState([]);

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
                            <th>Tipo</th>
                            <th>Nro</th>
                            <th className="text-end">Importe</th>
                            <th className="text-end" align="right">Pendiente</th>
                        </tr>
                    </thead>
                    <tbody className="table-group">
                        {comprobantes == undefined ? (
                            <tr></tr>
                        ) : (
                            comprobantes.map((x: any) => (
                                <tr key={x.id}>
                                    {x.pendiente <= 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox"
                                                onClick={(e) => checkClick(e, x.import_can.toFixed(2))}
                                            />
                                        </td>
                                    )}
                                    <td>{x.fecha_emis}</td>
                                    <td>{x.t_comp}</td>
                                    <td>{x.n_comp}</td>
                                    <td>{x.fecha_vto}</td>
                                    <td>{x.t_comp_can}</td>
                                    <td>{x.n_comp_can}</td>  
                                    <td align="right">{x.importe_vt.toFixed(2)}</td>
                                    <td align="right">{x.import_can.toFixed(2)}</td>
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
