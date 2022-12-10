import { Asignaturas } from "../../../Components/Admin/Asignaturas/Asignaturas"
import { Aside } from "../../../layouts/Aside"
import { Footer } from "../../../layouts/Footer"
import { Nav } from "../../../layouts/Nav"


function AsignaturasPage() {
    return (
        <>
            <Nav />
            <Aside />
            <Asignaturas /> 
            <Footer />
        </> 
    )
}
export { AsignaturasPage }