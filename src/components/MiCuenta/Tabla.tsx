import { useEffect, useState } from "react";
//import "./Tabla.css";

const Tabla = (props: any) => {
    const { titulo, comps, ActualizarImporte } = props
    const [comprobantes, setComprobantes] = useState([]);

    const checkClick = (e: any, importeCheck: any) => {
        if (e.target.checked) ActualizarImporte(Number(importeCheck.toFixed(2)));
        else ActualizarImporte(Number((importeCheck * -1).toFixed(2)));
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
                            <th>Importe</th>
                            <th>Pendiente</th>
                        </tr>
                    </thead>
                    <tbody className="table-group">
                        {comprobantes == undefined ? (
                            <tr></tr>
                        ) : (
                            comprobantes.map((x) => (
                                <tr key={x.n_comp}>
                                    {x.pendiente <= 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox"
                                                onClick={(e) => checkClick(e, parseFloat(x.importe))}
                                            />
                                        </td>
                                    )}
                                    <td>{x.fecha_emis}</td>
                                    <td>{x.t_comp}</td>
                                    <td>{x.n_comp}</td>
                                    <td>{x.fecha_vto}</td>
                                    <td>{x.t_comp_can}</td>
                                    <td>{x.n_comp_can}</td>
                                    <td>{x.importe_vt}</td>
                                    <td>{x.import_can}</td>
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
