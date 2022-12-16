import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cargarAsignaturas, cargarToken } from "../../../Server/servidor";

function Asignaturas() {
    let token = localStorage.getItem("token");
    const [listaAsignaturas, setlistaAsignaturas] = useState([]);
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

    const listarAsignaturas = async () => {
        try {
            const data = await cargarAsignaturas();
            setlistaAsignaturas(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        listarAsignaturas();
    }, []
    )

    const buscador = (e) => {
        setBusqueda(e.target.value);
    }

    let resultado = [];

    if (!busqueda) {
        resultado = listaAsignaturas;
    } else {
        resultado = listaAsignaturas.filter((dato) =>
            dato.descripcionAsignatura.toLowerCase().includes(busqueda.toLowerCase()))
    }

    return (
        <>
            <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-light">Asignaturas</h1>
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
                                            <input type="email" className="form-control rounded-pill" id="exampleInputEmail1" placeholder="Busque aqui por nombre" onChange={buscador} value={busqueda} />
                                        </div>
                                        <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
                                            Crear
                                        </button>
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th><i className="fas fa-list-ol"></i></th>
                                                    <th><i className="fas fa-bookmark"></i>&nbsp;&nbsp; Descripción Asignatura</th>
                                                    <th><i className="fas fa-stream"></i>&nbsp;&nbsp; Grado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {resultado.map((asignatura) => (
                                                    <tr key={asignatura.id}>
                                                        <td>{contador += 1}</td>
                                                        <td>{asignatura.descripcionAsignatura}</td>
                                                        <td>{asignatura.nombreGrado}</td>
                                                        <td>
                                                            <NavLink to={`/admin/asignaturas/${asignatura.id}`} className="btn btn-primary" style={{ height: 35, width: 50, borderTopLeftRadius: 50, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}><i className="fas fa-user-edit"></i></NavLink>
                                                            <NavLink className="btn btn-danger" style={{ height: 35, width: 50, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}><i className="fas fa-trash-alt"></i></NavLink>
                                                        </td>
                                                    </tr>
                                                ))}
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
export { Asignaturas }