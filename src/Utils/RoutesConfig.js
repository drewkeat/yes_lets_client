import { Routes, Route } from "react-router-dom";
import {
  Landing,
  Dashboard,
  Account,
  FormContainer,
  FriendsNav,
} from "../Containers";
function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/friends" element={<FriendsNav />} />
      <Route path="/new-availability" element={<FormContainer />} />
    </Routes>
  );
}

export default RoutesConfig;
