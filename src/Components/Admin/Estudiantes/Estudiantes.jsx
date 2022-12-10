import { useEffect, useState } from "react";
import { cargarEstudiantes } from "../../../Server/servidor";

function Estudiantes() {

    const [listaEstudiantes, setListaEstudiantes] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    let contador = 0;

    const getEstudiantes = async () => {
        try {
            const data = await cargarEstudiantes();
            setListaEstudiantes(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEstudiantes();
    }, [])

    const buscador = (e) => {
        setBusqueda(e.target.value);
    }

    let resultado = [];

    if (!busqueda) {
        resultado = listaEstudiantes;
    } else {
        resultado = listaEstudiantes.filter((dato) =>
        dato.nombres.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.apellidos.toLowerCase().includes(busqueda.toLowerCase()) || 
        dato.numeroDocumento.toLowerCase().includes(busqueda.toLowerCase()))
    }

    return (
        <>
            <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-light">Estudiantes</h1>
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
                                            <input type="text" className="form-control rounded-pill" id="exampleInputEmail1" placeholder="Busque aqui por nombre, apellidos o identificacion" onChange={buscador} value={busqueda} />
                                        </div>
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th><i className="fas fa-list-ol"></i></th>
                                                    <th><i className="fas fa-stream"></i>&nbsp; Nombre Completo</th>
                                                    <th><i className="fas fa-id-card"></i>&nbsp; Identificacion</th>
                                                    <th><i className="fas fa-calendar-alt"></i>&nbsp; Nacimiento</th>
                                                    <th><i className="fas fa-input-numeric"></i>&nbsp; Edad</th>
                                                    <th><i className="fas fa-venus-mars"></i>&nbsp; Genero</th>
                                                    <th>Acudiente</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    resultado.length > 0 ?

                                                    resultado.map((estudiante) => (
                                                        <tr key={estudiante.id}>
                                                            <td>{contador += 1}</td>
                                                            <td>{estudiante.nombres + " " + estudiante.apellidos}</td>
                                                            <td>{estudiante.tipoDocumento + ". " + estudiante.numeroDocumento}</td>
                                                            <td>{estudiante.fechaNacimiento.substr(0, 10)}</td>
                                                            <td>{estudiante.edad}</td>
                                                            <td>{estudiante.sexo}</td>
                                                            <td>{estudiante.idAcudiente}</td>
                                                        </tr>
                                                    )) : <tr>
                                                            <td colSpan={6} className="text-center">No existe ningun registro</td>
                                                    </tr>
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
export { Estudiantes }