import React from "react"
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login() {
    return (
        <>
            <div className="contenedor">
                <div className="forms-contenedor">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form">
                            <h2 className="title">Bienvenid@</h2>
                            <div className="input-field">
                                <i><FaUserAlt /></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i><FaLock/></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Iniciar Sesión" className="btn solid" />
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