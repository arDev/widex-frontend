import { useEffect, useState } from "react"
import "./categorias.css"
import { userStore } from "../stores/userStore"

export default function Categorias() {

    const [data, setData] = useState<any>({})
    const setId  = userStore(state => state.setId)
    
    const Actualizar = async (id: string) => {
        const URL = "http://localhost:5000/";
        
        const showData = async () => {
            const myHeaders = new Headers();

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
            };
            console.log(URL + "Categoria/Get/" + id)
            fetch(URL + "Categoria/Get/" + id, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    var data = JSON.parse(result);
                    setData(data)
                    MandarId(data.seleccionada?.path)
                })
                .catch((error) => console.error(error));
        };

        showData()
    }

    const MandarId = (id:string) => {setId(id)}

    useEffect(() => {
        Actualizar("1")
    }, []);

    const clickLink = (param: string) => {
        Actualizar(param)
    }


    return (
        <>
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