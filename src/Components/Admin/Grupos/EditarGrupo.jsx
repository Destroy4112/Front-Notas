import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cargarGrupoPorId, cargarToken } from "../../../Server/servidor";


function EditarGrupo() {

    let token = localStorage.getItem("token");
    const { id } = useParams();
    const [grupo, setGrupo] = useState({});

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

    const consultaGrupo = async () => {
        try {
            const data = await cargarGrupoPorId(id);
            setGrupo(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultaGrupo();
    })

    return (
        <>
            <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-light">Editar Asignatura</h1>
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
                                        <form>
                                            <div className="form-group col-md-8">
                                                <label>Id</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" defaultValue={grupo.idCurso} disabled />
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label>Grupo</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Asignatura" defaultValue={grupo.nombreGrupo} />
                                            </div>
                                        </form>

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
export { EditarGrupo }