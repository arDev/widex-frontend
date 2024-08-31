import { useEffect, useState } from "react"
import "./categorias.css"

export default function Categorias() {

    const [data, setData] = useState<any>({})

    const Actualizar = async (id: string) => {
        const URL = "http://localhost:5000/";

        const showData = async () => {
            const myHeaders = new Headers();

            //            myHeaders.append("Authorization", "Bearer " + tk);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
            };
            fetch(URL + "Categoria/Get/" + id, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    var data = JSON.parse(result);
                    setData(data)
                    console.log(data)
                })
                .catch((error) => console.error(error));
        };

        showData()
    }

    useEffect(() => {
        Actualizar("1")
    }, []);

    const clickLink = (param: string) => {
        Actualizar(param)
    }


    return (
        <>
            <legend>Categorias</legend>


            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {
                        data.padres?.map((x) => (
                            <li className="breadcrumb-item"><a href="javascript:void(0)" onClick={() => clickLink(x.idfolder)}>{x.descrip}</a></li>
                        ))
                    }
                    <li className="breadcrumb-item active" aria-current="page">{data.seleccionada?.descrip}</li>
                </ol>
            </nav>
            <div className="flex-container">
                {
                    data.hijos?.map((j) => (
                        <button type="button" className="btn btn-secondary btn-sm btn-categoria" onClick={() => clickLink(j.idfolder)}>
                            {j.descrip}
                        </button>
                    ))
                }
            </div>

        </>
    )
}