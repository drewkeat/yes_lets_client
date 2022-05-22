import { Routes, Route } from "react-router-dom";
import { Landing, Other } from "../Containers";
function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  );
}

export default RoutesConfig;
