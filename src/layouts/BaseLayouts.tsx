import { Outlet } from "react-router-dom"
import { Header } from "../components/header"


const BaseLayouts = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default BaseLayouts