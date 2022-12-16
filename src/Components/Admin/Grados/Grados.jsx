import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { cargarGrados, cargarToken } from "../../../Server/servidor";

function Grados() {

    let token = localStorage.getItem("token");
    const [listaGrados, setListaGrados] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    let contador = 0;

    const navigate = useNavigate();
    const returnToPrincipal = () => {
        navigate("/");
    }

    useEffect(() => {
        if (!token) {
            returnToPrincipal();
        }
        cargarToken(token);
      })

    const consultarGrados = async () => {
        try {
            const data = await cargarGrados();
            console.log(data);
            setListaGrados(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultarGrados();
    }, []
    )

    const buscador = (e) => {
        setBusqueda(e.target.value);
    }

    let resultado = [];

    if (!busqueda) {
        resultado = listaGrados;
    } else {
        resultado = listaGrados.filter((dato) =>
            dato.descripcionGrado.toLowerCase().includes(busqueda.toLowerCase()))
    }

    return (
        <>
            <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-light">Grados</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-6 float-right pb-4 ">
                                            <input type="email" className="form-control rounded-pill" id="exampleInputEmail1" placeholder="Busque aqui por descripción" onChange={buscador} value={busqueda} />
                                        </div>
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th><i className="fas fa-list-ol"></i></th>
                                                    <th><i className="fas fa-stream"></i>&nbsp;&nbsp; Descripción Grado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    resultado.map((item) => (
                                                        <tr key={item.id}>
                                                            <td>{contador += 1}</td>
                                                            <td>{item.descripcionGrado}</td>
                                                            <td>
                                                            <NavLink to={`/admin/grado/${item.id}`} className="btn btn-primary" style={{ height: 35, width: 50, borderTopLeftRadius: 50, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}><i className="fas fa-user-edit"></i></NavLink>
                                                            <NavLink className="btn btn-danger" style={{ height: 35, width: 50, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}><i className="fas fa-trash-alt"></i></NavLink>
                                                        </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export { Grados }