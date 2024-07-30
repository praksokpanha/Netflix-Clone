import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import SearchPage from "./pages/SearchPage";
import Watch from "./pages/Watch";
import NotFoundPage from "./pages/404";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";


function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/watch/:id"
            element= {<Watch/>}
          />
          <Route
            path="/search"
            element={user ? <SearchPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/history"
            element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
