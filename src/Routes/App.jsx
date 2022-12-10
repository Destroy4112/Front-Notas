import { HashRouter, Route, Routes } from "react-router-dom";
import { AsignaturasPage } from "../Pages/Admin/Asignaturas/AsignaturasPage";
import { EditAsignaturaPage } from "../Pages/Admin/Asignaturas/EditAsignaturaPage";
import { CursosPage } from "../Pages/Admin/CursosPage";
import { DocentesPage } from "../Pages/Admin/Docentes/DocentesPage";
import { EditDocentePage } from "../Pages/Admin/Docentes/EditDocentePage";
import { EstudiantesPage } from "../Pages/Admin/EstudiantesPage";
import { EditGradoPage } from "../Pages/Admin/Grados/EditGradoPage";
import { GradosPage } from "../Pages/Admin/GradosPage";
import { EditGrupoPage } from "../Pages/Admin/Grupos/EditGrupoPage";
import { GruposPage } from "../Pages/Admin/GruposPage";
import { EditRolPage } from "../Pages/Admin/Roles/EditRolPage";
import { RolesPage } from "../Pages/Admin/RolesPage";
import { UsuariosPage } from "../Pages/Admin/UsuariosPage";
import { YearsPage } from "../Pages/Admin/YearsPage";
import { LoginPage } from "../Pages/LoginPage";
import { PrincipalPage } from "../Pages/PrincipalPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/principal" element={<PrincipalPage />} />
        <Route path="/admin/docentes" element={<DocentesPage />} />
        <Route path="/admin/docentes/:id" element={<EditDocentePage/>} />
        <Route path="/admin/estudiantes" element={<EstudiantesPage />} />
        <Route path="/admin/years" element={<YearsPage/> } />
        <Route path="/admin/grados" element={<GradosPage/>} />
        <Route path="/admin/grado/:id" element={<EditGradoPage/>} />
        <Route path="/admin/grupos" element={<GruposPage/>} />
        <Route path="/admin/grupo/:id" element={<EditGrupoPage/>} />
        <Route path="/admin/asignaturas" element={<AsignaturasPage/>} />
        <Route path="/admin/asignaturas/:id" element={<EditAsignaturaPage/>} />
        <Route path="/admin/usuarios" element={<UsuariosPage/>} />
        <Route path="/admin/cursos" element={<CursosPage />} />
        <Route path="/admin/roles" element={<RolesPage/>} />
        <Route path="/admin/rol/:id" element={<EditRolPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
