import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
