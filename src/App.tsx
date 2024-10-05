import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import Posts from "./pages/dashboard/Posts";
import Users from "./pages/dashboard/Users";
import Department from "./pages/dashboard/Department";
import Login from "./pages/Login";
import { useUser } from "./store/useUser";
import LoginTv from "./pages/LoginTv";

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
        <Route path="/login-tv" element={<LoginTv />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <span className="fixed left-2 top-2 z-[122222222] rounded-lg bg-red-500 p-3 text-lg font-medium text-white shadow-md shadow-black/30">
        EXPERIMENTAL
      </span>
    </div>
  );
}

export default App;
