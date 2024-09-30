import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import Posts from "./pages/dashboard/Posts";
import Users from "./pages/dashboard/Users";
import Department from "./pages/dashboard/Department";
import Login from "./pages/Login";
import { useUser } from "./store/useUser";

function App() {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/posts" element={<Posts />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/departments" element={<Department />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
