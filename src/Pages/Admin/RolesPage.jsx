import { Roles } from "../../Components/Admin/Roles/Roles"
import { Aside } from "../../layouts/Aside"
import { Footer } from "../../layouts/Footer"
import { Nav } from "../../layouts/Nav"

function RolesPage() {
    return (
        <>
            <Nav />
            <Aside />
            <Roles /> 
            <Footer />
        </> 
    )
}
export { RolesPage }