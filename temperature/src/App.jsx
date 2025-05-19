import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Slidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers"; // new

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
