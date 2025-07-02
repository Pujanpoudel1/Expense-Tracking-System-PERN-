import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";

import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  // const [forgetPassword, setForgetPassword] = usestate(false);

  const setCredentials = useStore((state) => state.setCredentails);
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeUser = {
      name: "Pujan",
      email: "pujan@gmail.com",
    };

    localStorage.setItem("user", JSON.stringify(fakeUser));
    setCredentials(fakeUser);
    navigate("/overview");
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {/* Blurry dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Login Card */}
      <div className="w-[90%] max-w-sm p-5 bg-gray-900 bg-opacity-80 backdrop-blur-lg flex flex-col items-center gap-3 rounded-xl shadow-lg z-10">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-14 h-14 object-cover rounded-full"
        />

        <h1 className="text-xl font-semibold text-white">Welcome To ETS!</h1>
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <span
            className="text-white underline cursor-pointer"
            onClick={() => navigate("/sign-up")}
          >
            Sign up
          </span>
        </p>

        {/* Inputs */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
            <MdAlternateEmail className="text-white" />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-0 w-full outline-none text-white text-sm"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
            <FaFingerprint className="text-white" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-white text-sm"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer text-white"
                onClick={togglePasswordView}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer text-white"
                onClick={togglePasswordView}
              />
            )}
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-white text-sm"
        >
          Login
        </button>
         <span
            className="text-white underline cursor-pointer"
            onClick={() => navigate("")}
          >
            Forgot Password?
          </span>

        {/* Divider */}
        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/5 h-[2px] bg-gray-700" />
          <h3 className="px-4 text-gray-400 text-sm">Or</h3>
          <div className="w-2/5 h-[2px] bg-gray-700" />
        </div>

        {/* Social Logins */}
        <div className="w-full flex items-center justify-evenly gap-2">
          <div className="p-2 bg-slate-700 rounded-xl hover:bg-slate-800 cursor-pointer">
            <BsApple className="text-white text-xl" />
          </div>
          <div className="p-2 bg-slate-700 rounded-xl hover:bg-slate-800 cursor-pointer">
            <img
              src="/google-icon.png"
              alt="google-icon"
              className="w-6 h-6 object-contain rounded-full"
            />
          </div>
          <div className="p-2 bg-slate-700 rounded-xl hover:bg-slate-800 cursor-pointer">
            <FaXTwitter className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
