import { Route, Routes } from "react-router-dom";
import Overviewpage from "./Pages/Overviewpage";
import Productpage from "./Pages/Productpage";
import Sidebar from "./Component/Sidebar";
import Userspage from "./Pages/Userspage";
import Salespage from "./Pages/Salespage";
import Orderspage from "./Pages/Orderspage";


function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-gray-100">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Overviewpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/users" element={<Userspage />} />
        <Route path="/sales" element={<Salespage />} />
        <Route path="/orders" element={<Orderspage />} />
      </Routes>
    </div>
  );
}

export default App;
