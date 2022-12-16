import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Principal() {

    let token = localStorage.getItem("token");

    const navigate = useNavigate();
    const returnToPrincipal = () => {
        navigate("/");
    }

    useEffect(() => {
        if (!token) {
            returnToPrincipal();
        }
    })

    return (
        <div className="content-wrapper" style={{ background: '#0d3e5c' }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-light">Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-light">
                                <div className="inner">
                                    <h3>2</h3>
                                    <p>Cursos</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-ios-book text-success"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-light">
                                <div className="inner">
                                    <h3>1283733</h3>

                                    <p>Estudiantes</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-university text-danger"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-light">
                                <div className="inner">
                                    <h3>279</h3>
                                    <p>Docentes</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-stalker text-warning"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-light">
                                <div className="inner">
                                    <h3>56</h3>

                                    <p>Asignaturas</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bookmark text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-body p-0">
                                    <img src={require('../Assets/images/Fondo.png')} className="mx-auto d-block img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export { Principal}