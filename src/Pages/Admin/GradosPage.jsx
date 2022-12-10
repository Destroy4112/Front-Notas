import { Grados } from "../../Components/Admin/Grados/Grados"
import { Aside } from "../../layouts/Aside"
import { Footer } from "../../layouts/Footer"
import { Nav } from "../../layouts/Nav"

function GradosPage() {
    return (
        <>
            <Nav />
            <Aside />
            <Grados />
            <Footer />
        </> 
    )
}
export { GradosPage } 