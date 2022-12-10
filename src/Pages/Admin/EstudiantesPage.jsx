import { Estudiantes } from "../../Components/Admin/Estudiantes/Estudiantes"
import { Aside } from "../../layouts/Aside"
import { Footer } from "../../layouts/Footer"
import { Nav } from "../../layouts/Nav"

function EstudiantesPage() {
    return (
        <>
            <Nav />
            <Aside />
            <Estudiantes />
            <Footer />
        </> 
    )
}
export { EstudiantesPage }