import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepages } from "./pages/client/homepages"
import { Productslist } from "./pages/client/productslist"
import { Signin } from "./pages/client/signin"
import { Signup } from "./pages/client/signup"
import { Products_details } from './pages/client/products_details'
import { List_products } from "./pages/admin/list_products"

import { Addproducts} from './pages/admin/addproducts'
import { Edit } from "./pages/admin/edit"
import { Cart } from "./pages/client/cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Homepages />} />
          <Route path="products" element={<Productslist />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products/:id" element={<Products_details />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          </Route>
          
          

          <Route path="/admin" element={<List_products />} />
          <Route path="/admin/add" element={<Addproducts  />} />
          <Route  path="/admin/edit/:id" element={<Edit />}/> 
          
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
