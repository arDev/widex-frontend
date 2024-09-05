import Tabla from "./Tabla";
//import "./MiCuenta.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/userStore";

const MiCuenta = () => {
    const [comprobantes, setComprobantes] = useState([]);
    const [importeAPargar, setImporteAPagar] = useState(0);
    const navigate = useNavigate();
    const token = userStore(state => state.usuario?.token)
    const nombre = userStore(state => state.usuario?.nombre)
    const limiteCredito = userStore(state => state.usuario?.limiteCredito)

    const ActualizarImporte = (importeChk: any) => {
        setImporteAPagar(Number((importeAPargar + importeChk).toFixed(2)));
    };

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
        };

        fetch("http://localhost:5000/Comprobantes/Listar", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setComprobantes(JSON.parse(result).comprobantes);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div className="d-flex flex-colum align-items-center justify-content-center w-100">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="row ">
                                <div className="col">
                                    <h2>Hola, {nombre}!</h2>
                                </div>
                                <div className="col text-end">
                                    <div className="limite">
                                        Limite de Credito: $ {limiteCredito}
                                    </div>
                                    <div className="boton-pagar">
                                        <div className="texto-pagar">
                                            Total a pagar : $ {importeAPargar}
                                        </div>
                                        <button className="btn btn-success">Pagar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <Tabla
                                    titulo="Pendientes"
                                    comps={comprobantes.filter((x) => x.cancelado == false)}
                                    ActualizarImporte={ActualizarImporte}
                                />
                            </div>
                            <div className="row">
                                <Tabla
                                    titulo="Cancelados"
                                    comps={comprobantes.filter((x) => x.cancelado == true)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiCuenta;
