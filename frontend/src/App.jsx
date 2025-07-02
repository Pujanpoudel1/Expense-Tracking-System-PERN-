import { Navigate, Outlet, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import Dashboard from "./pages/auth/dashboard";
import Settings from "./pages/auth/settings";
import AccountPage from "./pages/auth/account-page";
import Transactions from "./pages/auth/transactions";
import useStore from "./store";

// ✅ Protected Layout for Authenticated Users
const RootLayout = () => {
  const { user } = useStore((state) => state);

  if (user === undefined) return <div>Loading...</div>; // Optional loader
  if (!user) return <Navigate to="/sign-in" replace />;

  return (
    <>
      {/* Uncomment if you want navbar */}
      {/* <Navbar /> */}
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </>
  );
};

function App() {
  return (
    <main>
      <div className="w-full min-h-screen px-6 bg-gray-100 md:px-20 dark:bg-slate-900">
        <Routes>
          {/* ✅ Public Routes */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/overview" />} />

          {/* ✅ Protected Routes */}
          <Route element={<RootLayout />}>
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
