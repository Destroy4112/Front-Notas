import { useEffect } from "react";
import { useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { agregarDocentes, cargarDocentes, cargarRolPorDescripcion, cargarToken, eliminarDocente } from "../../../Server/servidor";

function Docentes() {

    /*====================== Agregar ==============================*/

    let resultado = [];
    let token = localStorage.getItem("token");
    const [listaDocentes, setListaDocentes] = useState([]);
    const [modalCrear, setModalCrear] = useState(false);
    const [rol, setRol] = useState("");
    const [docente, setDocente] = useState({
        nombres: "",
        apellidos: "",
        tipoDocumento: "",
        numeroDocumento: "",
        correo: "",
        sexo: "",
        fechaNacimiento: "",
        telefono: "",
        edad: 0,
        idRol: "6392526dd619547c9a48d526"
    });

    useEffect(() => {
        calcularEdad();
    })

    function handleChange({ target }) {
        setDocente({
            ...docente,
            [target.name]: target.value
        });
    }

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
    async function handleSubmit(e) {
        e.preventDefault();

        let msg = "";
        let icono = "";
        let titulo = "";
        if (docente.nombres.length <= 0 || docente.apellidos.length <= 0 || docente.tipoDocumento.length <= 0
            || docente.numeroDocumento.length <= 0 || docente.correo.length <= 0 || docente.sexo.length <= 0
            || docente.fechaNacimiento.length <= 0 || docente.telefono.length <= 0) {
            icono = 'warning';
            titulo = 'No se pudo completar';
            msg = 'hay campos vacios en el formulario';
        } else {
            await agregarDocentes(docente);
            icono = 'success';
            titulo = 'Hecho!';
            msg = 'Docente creado correctamente';
        }
        Swal.fire({
            position: 'center',
            icon: icono,
            title: titulo,
            text: msg,
            showConfirmButton: false,
            timer: 1700
        })
        let datos = await getDocentes();
        resultado = datos;
    }

    const abrirModal = () => {
        setModalCrear(!modalCrear);
    }

    function calcularEdad() {
        let fechaMilisegundo = new Date(docente.fechaNacimiento).getTime();
        let hoyMilisegundo = new Date().getTime();
        let edad = Math.floor(((hoyMilisegundo - fechaMilisegundo) / (1000 * 60 * 60 * 24)) / 365);
        docente.edad = edad;
    }

    /*====================== Mostrar ==============================*/

    const getDocentes = async () => {
        try {
            const data = await cargarDocentes();
            setListaDocentes(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDocentes();
    }, [])

    /*====================== Buscar ==============================*/

    const [busqueda, setBusqueda] = useState("");

    const buscador = (e) => {
        setBusqueda(e.target.value);
    }

    if (!busqueda) {
        resultado = listaDocentes;
    } else {

        resultado = listaDocentes.filter((dato) =>
            dato.nombres.toLowerCase().includes(busqueda.toLowerCase()) ||
            dato.apellidos.toLowerCase().includes(busqueda.toLowerCase()) ||
            dato.numeroDocumento.toLowerCase().includes(busqueda.toLowerCase()))
    }

    /*====================== Eliminar ==============================*/

    const eliminar = async (id) => {
        Swal.fire({
            title: '¿Seguro que quiere eliminar este rol?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const res = eliminarDocente(id);
                if (res) {
                    setListaDocentes(listaDocentes.filter((rol) => rol.id !== id))
                }
                Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado correctamente este docente.',
                    'success',
                )
            }
        })

    }

    //=======================================================================

    const buscarRol = async () => {
        const resRol = await cargarRolPorDescripcion('Docente');
        setRol(resRol.id);
        console.log("rol" + rol);
    }

    useEffect(() => {
        buscarRol();
    })

    return (
        <>
            <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-light">Docentes</h1>
                            </div>
                            <div className="col-md-6 float-right pb-4 ">
                                <input type="text" className="form-control rounded-pill" id="exampleInputEmail1" placeholder="Busque aqui por nombre, apellidos o identificacion" onChange={buscador} value={busqueda} />
                            </div>
                            <div className="col-md-6 float-left pb-1 ">
                                <Button onClick={() => abrirModal()} variant="outline-primary" style={{ height: 35, width: 110 }}>Crear</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">

                        <div className="row">
                            {
                                resultado.length > 0 ?
                                    resultado.map((item) => (
                                        <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column" key={item.id}>
                                            <div className="card bg-light d-flex flex-fill">
                                                <div className="card-header text-muted border-bottom-0">
                                                    {item.nombres + " " + item.apellidos}
                                                </div>
                                                <div className="card-body pt-4">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                <li className="small mb-2"><span className="fa-li"><i className="fas fa-address-card"></i></span>&nbsp; Identificacion: <br /> {item.tipoDocumento + ". " + item.numeroDocumento}</li>
                                                                <li className="small mb-2"><span className="fa-li"><i className="fas fa-envelope"></i></span> &nbsp;Correo: <br />{item.correo}</li>
                                                                <li className="small mb-2"><span className="fa-li"><i className="fas fa-phone-alt"></i></span> &nbsp;Telefono: <br /> {item.telefono}</li>
                                                                <li className="small mb-2"><span className="fa-li"><i className="fas fa-calendar-alt"></i></span> &nbsp;Nacimiento: <br /> {item.fechaNacimiento.substr(0, 10)}</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-5 text-center h-25">
                                                            {item.sexo === 'Masculino' ?
                                                                <img src={require('../../../Assets/images/avatar4.png')} alt="user-avatar" className="img-circle img-fluid" />
                                                                :
                                                                <img src={require('../../../Assets/images/avatar2.png')} alt="user-avatar" className="img-circle img-fluid" />
                                                            }
                                                            <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                <li className="small"><span className="fa-li"><i className="fas fa-map-marker-alt"></i></span> &nbsp;Edad: <br /> {item.edad}</li>
                                                                <li className="small"><span className="fa-li"><i className="fas fa-venus-mars"></i></span> &nbsp;Genero: <br /> {item.sexo}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer" style={{ marginBottom: -20 }}>
                                                    <div className="form-group">
                                                        <NavLink to={`/admin/docentes/${item.id}`} className="btn btn-primary" style={{ height: 35, width: 50, borderTopLeftRadius: 50, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}><i className="fas fa-user-edit"></i></NavLink>
                                                        <NavLink onClick={() => eliminar(item.id)} className="btn btn-danger" style={{ height: 35, width: 50, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}><i className="fas fa-trash-alt"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <div className="col-md-12 text-center"><h1 className="text-light py-5 px-">No existe ningun registro</h1></div>
                            }
                        </div>
                    </div>
                </section >
            </div >
            <Modal size="lg" show={modalCrear} onHide={abrirModal}>
                <Form className="col-12" onSubmit={handleSubmit}>
                    <Modal.Header className="col-12">
                        <Modal.Title>Crear Docente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="col-12">
                        <Form.Group as={Col} controlId="idRol">
                            <Form.Control name="idRol" value={rol} onChange={handleChange} disabled />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="nombres">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control name="nombres" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="apellidos">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control name="apellidos" onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="tipoDocumento">
                                <Form.Label>Tipo Documento</Form.Label>
                                <Form.Select className="form-control" defaultValue={"Seleccione una opcion"} name="tipoDocumento" onChange={handleChange}>
                                    <option disabled>Seleccione una opcion</option>
                                    <option>TI</option>
                                    <option>CC</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="numeroDocumento">
                                <Form.Label>Numero Documento</Form.Label>
                                <Form.Control name="numeroDocumento" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="sexo">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Select className="form-control" defaultValue={"Seleccione una opcion"} name="sexo" onChange={handleChange}>
                                    <option disabled>Seleccione una opcion</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="correo">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" name="correo" onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="fechaNacimiento">
                                <Form.Label>Fecha Nacimiento</Form.Label>
                                <Form.Control type="date" name="fechaNacimiento" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="edad">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control name="edad" value={docente.edad ? docente.edad : 0} onChange={handleChange} disabled />
                            </Form.Group>
                            <Form.Group as={Col} controlId="telefono">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control name="telefono" onChange={handleChange} />
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="col-12">
                        <Button onClick={() => abrirModal()} variant="outline-primary" style={{ height: 35, width: 110 }}>Cancelar</Button>
                        <Button type="submit" variant="primary" onClick={abrirModal} style={{ height: 35, width: 120, background: 'seagreen' }}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
export { Docentes }