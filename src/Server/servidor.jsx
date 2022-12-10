const URL_DOCENTES = 'http://localhost:8080/api/docentes/';
const URL_ESTUDIANTES = 'http://localhost:8080/api/estudiantes/';
const URL_ASIGNATURA = 'http://localhost:8080/api/asignaturas/';
const URL_GRADO = 'http://localhost:8080/api/grados/';
const URL_GRUPOS = 'http://localhost:8080/api/grupos/';
const URL_CURSOS = 'http://localhost:8080/api/cursos/';
const URL_YEARS = 'http://localhost:8080/api/years/';
const URL_USUARIOS = 'http://localhost:8080/api/usuarios/';
const URL_ROLES = 'http://localhost:8080/api/roles/';

/*====== Docentes ===========*/

export async function agregarDocentes(docente) {
    const options = {
        method: 'POST',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(docente)
      };
    const res = await fetch(URL_DOCENTES,options);
    return await res.json();
}

export async function cargarDocentes() {
    const res = await fetch(URL_DOCENTES);
    return await res.json();
}

export async function cargarDocentePorId(id) {
    const res = await fetch(URL_DOCENTES + id);
    return await res.json();
}

export async function actualizarDocentes(docentes) {
    const options = {
        method: 'PUT',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(docentes)
      };
    const res = await fetch(URL_DOCENTES,options);
    return await res.json();
}

export async function eliminarDocente(id) {
    const options = { method: 'DELETE' };
    const res = await fetch(URL_DOCENTES + id, options);
    const msg = await res.text();
    return msg;
}

/*====== Estudiantes ===========*/

export async function cargarEstudiantes() {
    const res = await fetch(URL_ESTUDIANTES);
    return await res.json();
}

/*====== Asignaturas ===========*/

export async function cargarAsignaturas() {
    const res = await fetch(URL_ASIGNATURA);
    return await res.json();
}

export async function cargarAsignaturaPorId(id) {
    const res = await fetch(URL_ASIGNATURA + id);
    return await res.json();
}

/*====== Grados ===========*/

export async function cargarGrados() {
    const res = await fetch(URL_GRADO);
    return await res.json();
}

export async function cargarGradoPorId(id) {
    const res = await fetch(URL_GRADO + id);
    return await res.json();
}

/*====== Grupos ===========*/

export async function cargarGrupos() {
    const res = await fetch(URL_GRUPOS);
    return await res.json();
}

export async function cargarGrupoPorId(id) {
    const res = await fetch(URL_GRUPOS + id);
    return await res.json();
}

/*====== Cursos ===========*/

export async function cargarCursos() {
    const res = await fetch(URL_CURSOS);
    return await res.json();
}

export async function cargarCursoPorId(id) {
    const res = await fetch(URL_CURSOS + id);
    return await res.json();
}
/*====== Años ===========*/

export async function guardarYear(year) {
    const options = {
        method: 'POST',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(year)
      };
    const res = await fetch(URL_YEARS,options);
    return await res.json();
}

export async function cargarYears() {
    const res = await fetch(URL_YEARS);
    return await res.json();
}

export async function eliminarYear(id) {
    const options = { method: 'DELETE' };
    const res = await fetch(URL_YEARS + id, options);
    const msg = await res.text();
    return msg;
}
/*====== Usuarios ===========*/

export async function cargarUsuarios() {
    const res = await fetch(URL_USUARIOS);
    return await res.json();
}

/*====== Roles ===========*/
export async function guardarRol(rol) {
    const options = {
        method: 'POST',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(rol)
      };
    const res = await fetch(URL_ROLES,options);
    return await res.json();
}

export async function cargarRoles() {
    const res = await fetch(URL_ROLES);
    return await res.json();
}

export async function cargarRolPorId(id) {
    const res = await fetch(URL_ROLES + id);
    return await res.json();
}

export async function actualizarRol(rol) {
    const options = {
        method: 'PUT',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(rol)
      };
    const res = await fetch(URL_ROLES,options);
    return await res.json();
}

export async function eliminarRol(id) {
    const options = { method: 'DELETE' };
    const res = await fetch(URL_ROLES + id, options);
    const msg = await res.text();
    return msg;
}