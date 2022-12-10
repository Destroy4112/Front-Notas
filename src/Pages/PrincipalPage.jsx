import React from "react";
import { Principal } from "../Components/Principal";
import { Aside } from "../layouts/Aside";
import { Footer } from "../layouts/Footer";
import { Nav } from "../layouts/Nav";

function PrincipalPage() {
    return(
        <>
        <Nav/>
        <Aside/>
        <Principal/>
        <Footer/>
        </>
    )
}
export {PrincipalPage}