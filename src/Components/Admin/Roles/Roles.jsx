import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { cargarRoles, eliminarRol, guardarRol } from "../../../Server/servidor";

function Roles() {

  /*====================== Agregar ==============================*/
  const [listaRol, setListaRol] = useState([]);
  const [modalCrear, setModalCrear] = useState(false);
  const [rol, setRol] = useState({
    descripcionRol: ""
  });

  function handleChange({ target }) {
    setRol({
      ...rol,
      [target.name]: target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await guardarRol(rol);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Hecho',
      text: 'Se ha creado correctamente!',
      showConfirmButton: false,
      timer: 1700
    })
    let datos = await getRol();
    setListaRol(datos);
  }

  const abrirModal = () => {
    setModalCrear(!modalCrear);
  }

  /*====================== Mostrar ==============================*/

  let contador = 0;

  const getRol = async () => {
    try {
      const data = await cargarRoles();
      setListaRol(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRol();
  }, []);


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
        const res = eliminarRol(id);
        if (res) {
          setListaRol(listaRol.filter((rol) => rol.id !== id))
        }
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
                <h1 className="m-0 text-light">Roles</h1>
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
                    <table id="example2" className="table table-bordered table-hover" >
                      <thead>
                        <tr>
                          <th>
                            <i className="fas fa-list-ol"></i>
                          </th>
                          <th>
                            <i className="fas fa-users-cog"></i>&nbsp;&nbsp;
                            Descripción Rol
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listaRol.length > 0 ?
                            listaRol.map((item) => (
                              <tr key={item.id}>
                                <td>{(contador += 1)}</td>
                                <td>{item.descripcionRol}</td>
                                <td>
                                  <NavLink to={`/admin/rol/${item.id}`} className="btn btn-primary" style={{ height: 35, width: 50, borderTopLeftRadius: 50, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}><i className="fas fa-user-edit"></i></NavLink>
                                  <NavLink onClick={() => eliminar(item.id)} className="btn btn-danger" style={{ height: 35, width: 50, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}><i className="fas fa-trash-alt"></i></NavLink>
                                </td>
                              </tr>
                            )) : <tr>
                              <td colSpan={6} className="text-center">No existe ningun registro</td>
                            </tr>}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal size="sm" show={modalCrear} onHide={abrirModal}>
        <Form className="col-12" onSubmit={handleSubmit}>
          <Modal.Header className="col-12">
            <Modal.Title>Crear Rol</Modal.Title>
          </Modal.Header>
          <Modal.Body className="col-12">
            <Form.Group className="mb-3" controlId="descripcionYear">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="text" name="descripcionRol" placeholder="Descripcion rol" onChange={handleChange} />
            </Form.Group>
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
  );
}
export { Roles };