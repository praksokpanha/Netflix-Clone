import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const SignUpPage = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { signup } = useAuthStore();

    const handleSignUp = (e) => {
        e.preventDefault();
        signup ({ email, username, password});
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
            Sign Up
          </h1>

          <form action="" className="space-y-4" onSubmit={handleSignUp}>
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
            <div className="username">
              <label
                htmlFor="text"
                className="text-white text-sm font-medium tsxt-gray-300 block"
              >
                Username
              </label>
              <input
                type="username"
                className="w-full px-3 py-2 mt-1 border  border-gray-700 rounded-md bg-transparent text-white 
                            focus:outline-none first:ring"
                placeholder="alex123"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                Sign Up
              </button>
            </div>
            <div className="text-center text-gray-400">
                Already a member? {""}
                <Link to={"/login"} className="text-red-500 hover:underline">
                Sign in
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
