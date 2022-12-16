import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cargarToken, cargarUsuarios } from "../../../Server/servidor";

function Usuarios() {
  let token = localStorage.getItem("token");
  const [listaUsuario, setListaUsuario] = useState([]);
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

  const getUsuario = async () => {
    try {
      const data = await cargarUsuarios();
      setListaUsuario(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuario();
  }, []);
  const buscador = (e) => {
    setBusqueda(e.target.value);
  };

  let resultado = [];

  if (!busqueda) {
    resultado = listaUsuario;
  } else {
    resultado = listaUsuario.filter((dato) =>
      dato.usuario.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
      <div className="content-wrapper" style={{ background: "#0d3e5c" }}>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-light">Usuarios</h1>
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
                      <input type="text" onChange={buscador} value={busqueda} className="form-control rounded-pill" id="exampleInputEmail1" placeholder="Busque aqui por usuario" />
                    </div>
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>
                            <i className="fas fa-list-ol"></i>
                          </th>
                          <th>
                            <i className="fas fa-user"></i>&nbsp;&nbsp; Usuario
                          </th>
                          <th>
                            <i className="fas fa-key"></i>&nbsp;&nbsp;
                            Contraseña
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultado.map((usuario) => (
                          <tr key={usuario.id}>
                            <td>{(contador += 1)}</td>
                            <td>{usuario.usuario}</td>
                            <td>{usuario.clave}</td>
                            <td>{usuario.idRol}</td>
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
  );
}
export { Usuarios };