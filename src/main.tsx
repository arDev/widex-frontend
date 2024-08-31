import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar.tsx'
import Logout from './components/Login/Logout.ts'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import Login from './components/Login/Login.ts'
import Stock from './components/Stock/Stock.tsx'
import Ordenes from './components/Ordenes/Ordenes.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/">
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<ProtectedRoute redirectPath='/' />}> 
        <Route path="/stock" element={<Stock />} />
        <Route path="/ordenes" element={<Ordenes />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
