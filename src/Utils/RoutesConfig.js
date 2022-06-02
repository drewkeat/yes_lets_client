import { Routes, Route } from "react-router-dom";
import { Landing, Dashboard } from "../Containers";
function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default RoutesConfig;
