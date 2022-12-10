import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cargarGradoPorId } from "../../../Server/servidor";


function EditarGrados() {

    const { id } = useParams();
    const [grado, setGrado] = useState({});
    const consultaGrado = async () => {
        try {
            const data = await cargarGradoPorId(id);
            setGrado(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultaGrado();
    })

    return (
        <>
            <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-light">Editar Grado</h1>
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
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" defaultValue={grado.id} disabled />
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label>Grado</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Asignatura" defaultValue={grado.descripcionGrado} />
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Actualizar</button>
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
export { EditarGrados }