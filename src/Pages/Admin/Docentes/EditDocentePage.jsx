import { EditarDocente } from "../../../Components/Admin/Docentes/EditarDocentes"
import { Aside } from "../../../layouts/Aside"
import { Footer } from "../../../layouts/Footer"
import { Nav } from "../../../layouts/Nav"

function EditDocentePage(){
    return (
        <>
            <Nav />
            <Aside />
            <EditarDocente/>
            <Footer />
        </> 
    )
}
export {EditDocentePage}