import { EditarAsignatura } from "../../../Components/Admin/Asignaturas/EditarAsignatura"
import { Aside } from "../../../layouts/Aside"
import { Footer } from "../../../layouts/Footer"
import { Nav } from "../../../layouts/Nav"

function EditAsignaturaPage(){
    return (
        <>
            <Nav />
            <Aside />
            <EditarAsignatura /> 
            <Footer />
        </> 
    )
}
export {EditAsignaturaPage}