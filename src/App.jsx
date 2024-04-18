import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Login from './pages/login'
import Signup from './pages/signup'
import Forgotpassword from './pages/forgotpassword'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
