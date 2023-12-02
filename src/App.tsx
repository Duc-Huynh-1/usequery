import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepages } from "./pages/client/homepages"
import { Productslist } from "./pages/client/productslist"
import { Signin } from "./pages/client/signin"
import { Signup } from "./pages/client/signup"
import { Products_details } from './pages/client/products_details'
import { List_products } from "./pages/admin/Managas"
import PrivateRoute from './millderwe/PrivateRoute'
import { Addproducts } from "./pages/admin/Add"
import { Edit } from "./pages/admin/Edit"
import { Cart } from "./pages/client/cart"
import BaseLayouts from "./layouts/BaseLayouts"
import AdminLayouts from "./layouts/AdminLayouts"
import Dashboard from "./pages/admin/Dashboard"

function App() {
  const role = localStorage.getItem('role')
  console.log(role);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayouts />}>
            <Route path="/" element={<Homepages />} />
            <Route path="products" element={<Productslist />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="products/:id" element={<Products_details />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="/admin/" element={<PrivateRoute user={role}><AdminLayouts/></PrivateRoute> }>
          <Route index element={<Dashboard />} />
          <Route path="/admin/Managas" element={<List_products />} />
            <Route path="Managas/add" element={<Addproducts />} />
            <Route path="Managas/edit/:id" element={<Edit />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
