import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Slidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers"; // new
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddCustomers from "./components/Addcustomers";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/" element={<Signup />} />
            <Route path="/customers/addcustomers" element={<AddCustomers/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
