import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import Posts from "./pages/dashboard/Posts";
import Users from "./pages/dashboard/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="posts" element={<Posts />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
