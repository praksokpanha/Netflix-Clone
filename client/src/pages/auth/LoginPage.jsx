import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../../store/authUser";


const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuthStore();

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password});
    }
    return (
        <div className="h-screen w-full hero-bg">
          <header className="max w-6xl mx-auto items-center justify-between p-4">
            <Link to={"/"}>
              <img src="/netflix-logo.png" alt="logo" className="w-52" />
            </Link>
          </header>
          <div className="flex justify-center items-center mt-20 mx-3">
            <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
              <h1 className="text-center text-white text-2xl font-bold mb-4">
                Login
              </h1>
    
              <form action="" className="space-y-4" onSubmit={handleLogin}>
                <div className="email">
                  <label
                    htmlFor="email"
                    className="text-white text-sm font-medium tsxt-gray-300 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 mt-1 border  border-gray-700 rounded-md bg-transparent text-white 
                                focus:outline-none first:ring"
                    placeholder="your@example.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                
                <div className="password">
                  <label
                    htmlFor="password"
                    className="text-white text-sm font-medium tsxt-gray-300 block"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 mt-1 border  border-gray-700 rounded-md bg-transparent text-white 
                                focus:outline-none first:ring"
                    placeholder="********"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword (e.target.value)}
                  ></input>
                </div>
                <div className="">
                  <button
                    className="w-full py-2 bg-red-600 text-white font-semibold rounded-md
                        hover:bg-red-700"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-gray-400">
                    Don't have an account? {""}
                    <Link to={"/signup"} className="text-red-500 hover:underline">
                    Sign Up
                    </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default LoginPage
