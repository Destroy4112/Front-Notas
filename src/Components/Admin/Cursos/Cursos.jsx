import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cargarCursos } from "../../../Server/servidor"

function Cursos() {

    const [listaCursos, setListaCursos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    let contador = 0;

    const consultarCursos = async () => {
        try {
            const data = await cargarCursos();
            console.log(data);
            setListaCursos(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultarCursos();
    }, [])

    const buscador = (e) => {
        setBusqueda(e.target.value);
    }

    let resultado = [];

    if (!busqueda) {
        resultado = listaCursos;
    } else {
        resultado = listaCursos.filter((dato) =>
            dato.descripcionCurso.toLowerCase().includes(busqueda.toLowerCase()))
    }

    return (
        <>
            <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-light">Cursos</h1>
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
                                            <input type="text" className="form-control rounded-pill" id="exampleInputEmail1" placeholder="Busque aqui por descripción..    Ejm: 1 - A " onChange={buscador} value={busqueda} />
                                        </div>
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th><i className="fas fa-list-ol"></i></th>
                                                    <th><i className="fas fa-stream"></i>&nbsp; Descripción</th>
                                                    <th><i className="fas fa-stream"></i>&nbsp; Grado</th>
                                                    <th><i className="fas fa-stream"></i>&nbsp; Grupo</th>
                                                    <th><i className="fas fa-stream"></i>&nbsp; Año</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    resultado.map((curso) => (
                                                        <tr key={curso.idCurso}>
                                                            <td>{contador += 1}</td>
                                                            <td>{curso.descripcionCurso}</td>
                                                            <td>{curso.idGrado}</td>
                                                            <td>{curso.idGrupo}</td>
                                                            <td>{curso.idYear}</td>
                                                            <td>
                                                            <NavLink to={`/admin/curso/${curso.idCurso}`} className="btn btn-primary" style={{ height: 35, width: 50, borderTopLeftRadius: 50, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}><i className="fas fa-user-edit"></i></NavLink>
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
export { Cursos }