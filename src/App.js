import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Appointment/AppointmentHeader/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Appointment/AppointmentHeader/Dashboard/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Appointment/AppointmentHeader/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Appointment/AppointmentHeader/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './Pages/LoginPage/AdminRoute/AdminRoute';





function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Home />}/>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
      <Route path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute> }/>
      {/* <Route path="/dashboard/" element={<PrivateRoute><Dashboard/></PrivateRoute> }/> */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute> }>
      <Route path="dashboard" element={<DashboardHome />} />
      <Route path="" element={<DashboardHome />} />
      <Route path="makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
      <Route path="adddoctor" element={<AdminRoute><AddDoctor /></AdminRoute>} />

      </Route>
    </Routes>
  </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
