import { NavLink } from "react-router-dom"

function Aside() {
    return (
        <aside className="main-sidebar sidebar-light-primary elevation-4 position-fixed" style={{height:100}}>
            <div className="sidebar">
                <div className="user-panel mt-1 pb-3 mb-3 d-flex">
                    <img src={require('../Assets/images/logo.png')} alt="AdminLTE Logo" className="mx-auto d-block" style={{ opacity: .8, width: 150 }} />
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <NavLink to="/principal" className="nav-link">
                                <i className="nav-icon fas fa-home text-success"></i>
                                <p>&nbsp;
                                    Inicio
                                    <span className="right badge badge-success">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-header">Entidades</li>
                        <li className="nav-item">
                            <NavLink to="/admin/docentes" className="nav-link">
                                <i className="nav-icon fas fa-user-tie text-warning"></i>
                                <p>&nbsp;
                                    Docentes
                                    <span className="right badge badge-warning">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/estudiantes" className="nav-link">
                                <i className="nav-icon fas fa-user-graduate text-primary"></i>
                                <p>&nbsp;
                                    Estudiantes
                                    <span className="right badge badge-primary">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/years" className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt text-danger"></i>
                                <p>&nbsp;
                                    Años
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/grados" className="nav-link">
                                <i className="nav-icon fas fa-th-large text-success"></i>
                                <p>&nbsp;
                                    Grados
                                    <span className="right badge badge-success">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/grupos" className="nav-link">
                                <i className="nav-icon fas fa-layer-group text-warning"></i>
                                <p>&nbsp;
                                    Grupos
                                    <span className="right badge badge-warning">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/asignaturas" className="nav-link">
                                <i className="nav-icon fas fa-bookmark text-primary"></i>
                                <p>&nbsp;
                                    Asignaturas
                                    <span className="right badge badge-primary">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/usuarios" className="nav-link">
                                <i className="nav-icon fas fa-users text-danger"></i>
                                <p>&nbsp;
                                    Accesos
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/cursos" className="nav-link">
                                <i className="nav-icon fas fa-school text-success"></i>
                                <p>&nbsp;
                                    Cursos
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/roles" className="nav-link">
                                <i className="nav-icon fas fa-users-cog text-warning"></i>
                                <p>&nbsp;
                                    Roles
                                    <span className="right badge badge-warning">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-header pt-4">Gestiones</li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Profesor - Asignatura
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
export { Aside }