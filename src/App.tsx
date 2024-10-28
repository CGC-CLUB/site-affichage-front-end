import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { lazy, Suspense } from "react";

function App() {
  const Login = lazy(() => import("./pages/Login"));
  const LoginTv = lazy(() => import("./pages/LoginTv"));
  const Posts = lazy(() => import("./pages/dashboard/Posts"));
  const Users = lazy(() => import("./pages/dashboard/Users"));
  const Department = lazy(() => import("./pages/dashboard/Department"));
  const Home = lazy(() => import("./pages/Home"));
  const ErrorPage = lazy(() => import("./pages/ErrorPage"));

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex h-dvh items-center justify-center text-5xl">
            Loading...
          </div>
        }
      >
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
      </Suspense>
    </div>
  );
}

export default App;
