import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { cargarYears, eliminarYear, guardarYear } from "../../../Server/servidor";

function Years() {

  /*======= Agregar ========================================================*/
  const [modalCrear, setModalCrear] = useState(false);
  const [year, setYear] = useState({
    descripcionYear: "",
    curso: ""
  });

  function handleChange({ target }) {
    setYear({
      ...year,
      [target.name]: target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await guardarYear(year);
    Swal.fire(
      'Hecho!',
      'Se ha creado correctamente!',
      'success'
    )
  }

  const abrirModal = () => {
    setModalCrear(true);
  }

  const cerrarModalCrear = () => {
    setModalCrear(false);
  }
  /*====================== Mostrar ==============================*/

  let contador = 0;
  const [listaYear, setListaYear] = useState([]);

  const getYears = async () => {
    try {
      const data = await cargarYears();
      setListaYear(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYears();
  }, []);

  /*====================== Buscar ==============================*/

  const [busqueda, setBusqueda] = useState("");

  const buscador = (e) => {
    setBusqueda(e.target.value);
  };

  let resultado = [];

  if (!busqueda) {
    resultado = listaYear;
  } else {
    resultado = listaYear.filter((dato) =>
      dato.descripcionYear.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  /*====================== Editar ==============================*/

  const [modalEditar, setModalEditar] = useState(false);

  const yearSeleccionado = (elemento) => {
    setYear(elemento);
    setModalEditar(true);
  }

  const cerrarModalEditar = () => {
    setModalEditar(false);
  }

  async function handleSubmitEditar (e){
    e.preventDefault();
    console.log("estas editando")
  }

  /*====================== Eliminar ==============================*/

  const eliminar = async (id) => {
    Swal.fire({
      title: '¿Seguro que quiere eliminar este año?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarYear(id);
        Swal.fire(
          'Eliminado!',
          'El año se elimino correctamente.',
          'success',
        )
      }
    })
  }

  return (
    <>
      <div className="content-wrapper" style={{ background: "#0d3e5c" }}>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-light">Years</h1>
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
                    <div className="col-md-6 float-left pb-4 ">
                      <Button onClick={() => abrirModal()} variant="outline-primary" style={{ height: 35, width: 110 }}>Crear</Button>
                    </div>
                    <div className="col-md-6 float-right pb-4 ">
                      <input type="text" onChange={buscador} value={busqueda} className="form-control rounded-pill" id="exampleInputEmail1" placeholder="Busque aqui por año" />
                    </div>
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th><i className="fas fa-list-ol"></i></th>
                          <th colSpan={2}> <i className="fas fa-calendar-alt"></i>&nbsp; Año</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          resultado.length > 0 ?
                            resultado.map((item) => (
                              <tr key={item.id}>
                                <td>{(contador += 1)}</td>
                                <td>{item.descripcionYear}</td>
                                <td>
                                  <button className="btn btn-primary" onClick={() => yearSeleccionado(item)} style={{ height: 35, width: 50, borderTopLeftRadius: 50, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}><i className="fas fa-user-edit"></i></button>
                                  <button className="btn btn-danger" onClick={() => eliminar(item.id)} style={{ height: 35, width: 50, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, background: 'firebrick' }}><i className="fas fa-trash-alt"></i></button>
                                </td>
                              </tr>
                            )) : <tr>
                              <td colSpan={6} className="text-center">No existe ningun registro</td>
                            </tr>
                        }
                      </tbody>
                    </table>

                    <Modal show={modalCrear} onHide={cerrarModalCrear}>
                      <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                          <Modal.Title>Crear Año</Modal.Title>
                        </Modal.Header>
                        <Form.Group className="mb-3" controlId="descripcionYear">
                          <Form.Label>Descripcion</Form.Label>
                          <Form.Control type="text" name="descripcionYear" placeholder="Descripcion año" onChange={handleChange} />
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={cerrarModalCrear} style={{ height: 35, width: 120, background: 'seagreen' }}>
                          Guardar
                        </Button>
                      </Form>
                    </Modal>

                    <Modal show={modalEditar} onHide={cerrarModalEditar}>
                      <Form onSubmit={handleSubmitEditar}>
                        <Modal.Header closeButton>
                          <Modal.Title>Años</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control defaultValue={year.descripcionYear} type="email" placeholder="Descripcion año" />
                          </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={cerrarModalEditar} style={{ height: 35, width: 110 }}>
                            Cancelar
                          </Button>
                          <Button type="submit" variant="primary" onClick={cerrarModalEditar} style={{ height: 35, width: 120, background: 'seagreen' }}>
                            Actualizar
                          </Button>
                        </Modal.Footer>
                      </Form>
                    </Modal>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  );
}
export { Years };