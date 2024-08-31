import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Products from './components/Products.tsx'
import Logout from './components/Logout.ts'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import Login from './components/Login.ts'
import Categorias from './components/Categorias.tsx'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/">
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/categorias" element={<Categorias />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<ProtectedRoute redirectPath='/' />}> 
        <Route path="/productos" element={<Products />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
