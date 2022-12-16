import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { actualizarRol, cargarRolPorId, cargarToken } from "../../../Server/servidor";


function EditarRol() {

    let token = localStorage.getItem("token");
    const { id } = useParams();
    const [rol, setRol] = useState({
        id: "",
        descripcionRol: ""
    });

    const navigate2 = useNavigate();
    const returnToPrincipal = () => {
        navigate2("/");
    }

    useEffect(() => {
        if (!token) {
            returnToPrincipal();
        }
        cargarToken(token);
    })

    useEffect(() => {
        const consultaRol = async () => {
            const data = await cargarRolPorId(id);
            setRol(data);
            console.log(data);
        }
        consultaRol();
    }, [id])

    const navigate = useNavigate();
    const returnToRoles = () => {
        navigate("/admin/roles");
    }

    function handleChange({ target }) {
        setRol({
            ...rol,
            [target.name]: target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await actualizarRol(rol);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Hecho',
            text: 'Se actualizó correctamente',
            showConfirmButton: false,
            timer: 1600
        })
        returnToRoles();
    }

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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group col-md-8">
                                                <label>Id</label>
                                                <input type="text" onChange={handleChange} className="form-control" id="exampleInputEmail1" name="id" defaultValue={rol.id} disabled />
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label>Grupo</label>
                                                <input type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Asignatura" name="descripcionRol" defaultValue={rol.descripcionRol} />
                                            </div>
                                            <div className="form-group col-md-8">
                                                <button type="submit" className="btn btn-success" onClick={() => returnToRoles()}>Regresar</button>
                                                <button type="submit" className="btn btn-success" style={{ float: 'right' }}>Actualizar</button>
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
export { EditarRol }