import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import LoginForm from "./components/Login/LoginForm";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Stock from "./components/Stock/Stock";
import Ordenes from "./components/Ordenes/Ordenes";
import Logout from "./components/Login/Logout";
import MiCuenta from "./components/MiCuenta/MiCuenta";

function App() {
 
  return (
    <BrowserRouter basename="/">
    <Navbar />
    <Routes>
      <Route path="/" element={<LoginForm />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<ProtectedRoute redirectPath='/' />}> 
        <Route path="/stock" element={<Stock />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/ordenes" element={<Ordenes />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
