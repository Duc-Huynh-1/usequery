import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
import Footer from "../components/Footer"


const BaseLayouts = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default BaseLayouts