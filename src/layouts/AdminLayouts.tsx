
import { Outlet } from 'react-router-dom'
import Navadmin from '../components/Navadmin'

const AdminLayouts = () => {
    return (
        <div className='flex'>
            <Navadmin />
            <div className='ml-[250px]'>
            <Outlet />
            </div>
        </div>
    )
}

export default AdminLayouts