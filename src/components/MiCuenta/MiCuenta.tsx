import Tabla from "./Tabla";
import { useEffect, useState } from "react";
import { userStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import { resumen } from "./resumen.type";

const MiCuenta = () => {
    const [comprobantes, setComprobantes] = useState<resumen[]>([]);
    const [importeAPargar, setImporteAPagar] = useState<Number>(0);
    const token = userStore(state => state.usuario?.token)
    const nombre = userStore(state => state.usuario?.nombre)
    const limiteCredito = userStore(state => state.usuario?.limiteCredito)

    const navigate = useNavigate();

    const ActualizarImporte = (importeChk: any) => {
        setImporteAPagar(importeAPargar + importeChk);
    };

    const irAPargar = () => {
        navigate("https://www.widex.com.ar/pagos")
    };

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
        };

        fetch("http://localhost:5000/Comprobantes/resumen", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(JSON.parse(result).pendientes)
                setComprobantes(JSON.parse(result).pendientes);
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
                                    <h2>Bienvenido, {nombre}!</h2>
                                </div>
                                <div className="col text-end">
                                    <div className="limite">
                                        Limite de Credito: $ {limiteCredito}
                                    </div>
                                    <div className="boton-pagar">
                                        <div className="texto-pagar">
                                            Total a pagar : $ {Math.abs(Number(importeAPargar)).toFixed(2)}
                                        </div>
                                        <button className="btn btn-success" onClick={() => irAPargar()}>Pagar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <Tabla
                                    titulo="Pendientes"
                                    comps={comprobantes}
                                    ActualizarImporte={ActualizarImporte}
                                />
                            </div>
                            <div className="row">
                               { 
                            /* <Tabla
                                    titulo="Cancelados"
                                    comps={comprobantes.filter((x: any) => x.cancelado == true)}
                                /> */
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiCuenta;
