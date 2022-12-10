
import { EditarRol } from "../../../Components/Admin/Roles/EditarRol"
import { Aside } from "../../../layouts/Aside"
import { Footer } from "../../../layouts/Footer"
import { Nav } from "../../../layouts/Nav"

function EditRolPage(){
    return (
        <>
            <Nav />
            <Aside />
            <EditarRol/>
            <Footer />
        </> 
    )
}
export {EditRolPage}