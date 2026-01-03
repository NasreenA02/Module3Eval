import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
export default function App() {
  return(
    <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/admin" element={
           <ProtectedRoute role="admin"><AdminDashboard/>
           </ProtectedRoute> 
          }/>
          <Route path="/customer" element={
           <ProtectedRoute role="customer"><CustomerDashboard/>
           </ProtectedRoute> 
          }/>
          <Route path="/update/id"
          element= {
            <ProtectedRoute role="admin"><UpdateRestaurant/>
           </ProtectedRoute> 
          }/>
        </Routes>
        </BrowserRouter>
    
    </AuthProvider>
  );
}