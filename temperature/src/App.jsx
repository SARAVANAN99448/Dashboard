import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Slidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers"; // new
import Login from "./components/Login";
import AddCustomers from "./components/Addcustomers";
import Devices from "./components/Devices";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/addcustomers" element={<AddCustomers/>} />
            <Route path="/devices" element={<Devices/>} />
            <Route path="/dashboard/:deviceName" element={<Dashboard />} />
            <Route path="/home" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
