import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { actualizarDocentes, cargarDocentePorId, cargarToken } from "../../../Server/servidor";


function EditarDocente() {

    let token = localStorage.getItem("token");
    const { id } = useParams();

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
        const consultaDocente = async () => {
            try {
                const data = await cargarDocentePorId(id);
                setDocente(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        consultaDocente();
    }, [id])

    const [docente, setDocente] = useState({
        nombres: "",
        apellidos: "",
        tipoDocumento: "",
        numeroDocumento: "",
        correo: "",
        sexo: "",
        fechaNacimiento: "",
        telefono: "",
        edad: "",
        idRol: "639124d10a42c4039bec4032"
    });

    function handleChange({ target }) {
        setDocente({
            ...docente,
            [target.name]: target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await actualizarDocentes(docente);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Hecho',
            text: 'Se actualizó correctamente',
            showConfirmButton: false,
            timer: 1600
        })
        returnToDocentes();
    }

    const navigate = useNavigate();
    const returnToDocentes = () => {
        navigate("/admin/docentes");
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
                                        <Form className="col-md-12" onSubmit={handleSubmit}>
                                            <Row className="col-md-12 mb-3">
                                                <Form.Group as={Col} controlId="nombres">
                                                    <Form.Label>Nombres</Form.Label>
                                                    <Form.Control name="nombres" onChange={handleChange} defaultValue={docente.nombres} />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="apellidos">
                                                    <Form.Label>Apellidos</Form.Label>
                                                    <Form.Control name="apellidos" onChange={handleChange} defaultValue={docente.apellidos} />
                                                </Form.Group>
                                            </Row>
                                            <Row className="col-md-12 mb-3">
                                                <Form.Group as={Col} controlId="tipoDocumento">
                                                    <Form.Label>Tipo Documento</Form.Label>
                                                    <Form.Select defaultValue={docente.tipoDocumento} className="form-control" name="tipoDocumento" onChange={handleChange} disabled>
                                                        <option disabled>{docente.tipoDocumento}</option>
                                                        <option>TI</option>
                                                        <option>CC</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="numeroDocumento">
                                                    <Form.Label>Numero Documento</Form.Label>
                                                    <Form.Control name="numeroDocumento" onChange={handleChange} defaultValue={docente.numeroDocumento} disabled />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="sexo">
                                                    <Form.Label>Sexo</Form.Label>
                                                    <Form.Select className="form-control" defaultValue={docente.sexo} name="sexo" onChange={handleChange}>
                                                        <option disabled>{docente.sexo}</option>
                                                        <option>Masculino</option>
                                                        <option>Femenino</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>
                                            <Row className="col-md-12 mb-3">
                                                <Form.Group as={Col} controlId="correo">
                                                    <Form.Label>Correo</Form.Label>
                                                    <Form.Control name="correo" onChange={handleChange} defaultValue={docente.correo} />
                                                </Form.Group>
                                            </Row>
                                            <Row className="col-md-12 mb-3">
                                                <Form.Group as={Col} controlId="fechaNacimiento">
                                                    <Form.Label>Fecha Nacimiento</Form.Label>
                                                    <Form.Control name="fechaNacimiento" onChange={handleChange} defaultValue={docente.fechaNacimiento} disabled />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="edad">
                                                    <Form.Label>Edad</Form.Label>
                                                    <Form.Control name="edad" onChange={handleChange} defaultValue={docente.edad} disabled />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="telefono">
                                                    <Form.Label>Telefono</Form.Label>
                                                    <Form.Control name="telefono" onChange={handleChange} defaultValue={docente.telefono} />
                                                </Form.Group>
                                            </Row>
                                            <div className="form-group col-md-8">
                                                <button type="submit" className="btn btn-success" onClick={() => returnToDocentes()}>Regresar</button>
                                                <button type="submit" className="btn btn-success" style={{ float: 'right' }}>Actualizar</button>
                                            </div>
                                        </Form>

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
export { EditarDocente }