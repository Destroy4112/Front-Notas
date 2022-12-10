import { Cursos } from "../../Components/Admin/Cursos/Cursos"
import { Aside } from "../../layouts/Aside"
import { Footer } from "../../layouts/Footer"
import { Nav } from "../../layouts/Nav"

function CursosPage() {
    return (
        <>
            <Nav />
            <Aside />
            <Cursos />
            <Footer />
        </> 
    )
}
export { CursosPage }