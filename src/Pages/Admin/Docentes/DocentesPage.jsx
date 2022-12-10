import { Docentes } from "../../../Components/Admin/Docentes/Docentes"
import { Aside } from "../../../layouts/Aside"
import { Footer } from "../../../layouts/Footer"
import { Nav } from "../../../layouts/Nav"

function DocentesPage() {
    return (
        <>
            <Nav />
            <Aside />
            <Docentes />
            <Footer />
        </>
    )
}
export { DocentesPage }