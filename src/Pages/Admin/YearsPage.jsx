import { Years } from "../../Components/Admin/Year/Years"
import { Aside } from "../../layouts/Aside"
import { Footer } from "../../layouts/Footer"
import { Nav } from "../../layouts/Nav"

function YearsPage() {
    return (
        <>
            <Nav />
            <Aside />
            <Years />
            <Footer /> 
        </> 
    )
}
export { YearsPage }