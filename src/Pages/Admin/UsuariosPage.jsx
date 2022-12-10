import { Usuarios } from "../../Components/Admin/Usuarios/Usuarios"
import { Aside } from "../../layouts/Aside"
import { Footer } from "../../layouts/Footer"
import { Nav } from "../../layouts/Nav"

function UsuariosPage() {
    return (
        <>
            <Nav />
            <Aside /> 
            <Usuarios />
            <Footer />
        </> 
    )
}
export { UsuariosPage }