import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Login from './pages/login'
import Signup from './pages/signup'
import Forgotpassword from './pages/forgotpassword'
import Home from './pages/home'
import Layout_after_login from './components/layout_after_login'
import Order from './pages/order'
import Products from './pages/products'
function App() {
  const isLoggedIn = true;
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Layout_after_login /> : <Layout />}>
          <Route index element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='order' element={<Order />}></Route>
          <Route path='products' element={<Products />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
