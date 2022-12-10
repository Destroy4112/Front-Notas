import { EditarGrados } from "../../../Components/Admin/Grados/EditarGrados"
import { Aside } from "../../../layouts/Aside"
import { Footer } from "../../../layouts/Footer"
import { Nav } from "../../../layouts/Nav"

function EditGradoPage(){
    return (
        <>
            <Nav />
            <Aside />
            <EditarGrados/>
            <Footer />
        </> 
    )
}
export {EditGradoPage}