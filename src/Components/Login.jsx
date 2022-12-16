import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { cargarToken } from "../Server/servidor";

function Login() {
    const [token, setToken] = useState();
    const [usuario, setUsuario] = useState({
        usuario: "",
        clave: "",
        idRol: ""
    });

    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        });
    }

    const navigate = useNavigate();
    const returnToPrincipal = () => {
        navigate("/principal");
    }

    function crearToken() {
        const options = {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(usuario)
        }
        fetch('http://localhost:8080/api/autenticacion', options)
            .then(response => response.json())
            .then(response => 
                setToken(response.token)
            )
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        crearToken();
    })

    async function handleSubmit(e) {
        e.preventDefault();

        if(token === "0"){
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Error',
                text: 'Credenciales invalidas!',
                showConfirmButton: false,
                timer: 1700
              })
        }else{
            localStorage.setItem('token', token);
            cargarToken(token);
            returnToPrincipal();
        }
    }

    return (
        <>
            <div className="contenedor">
                <div className="forms-contenedor">
                    <div className="signin-signup">
                        <form onSubmit={handleSubmit} className="sign-in-form">
                            <h2 className="title">Bienvenid@</h2>
                            <div className="input-field">
                                <i><FaUserAlt /></i>
                                <input type="text" placeholder="Username" name="usuario" onChange={handleChange} required/>
                            </div>
                            <div className="input-field">
                                <i><FaLock /></i>
                                <input type="password" placeholder="Password" name="clave" onChange={handleChange} required/>
                            </div>
                            <input type="submit" onClick={() => crearToken()} value="Iniciar Sesión" className="btn solid" />
                        </form>
                    </div>
                </div>

                <div className="panels-contenedor">
                    <div className="panel left-panel">
                        <div className="content">
                            <img src={require('../Assets/images/logoB.png')} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Login }