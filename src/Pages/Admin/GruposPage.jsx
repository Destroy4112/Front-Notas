import { Grupos } from "../../Components/Admin/Grupos/Grupos"
import { Aside } from "../../layouts/Aside"
import { Footer } from "../../layouts/Footer"
import { Nav } from "../../layouts/Nav"

function GruposPage() {
    return (
        <>
            <Nav />
            <Aside /> 
            <Grupos/>
            <Footer />
        </> 
    )
}
export { GruposPage }