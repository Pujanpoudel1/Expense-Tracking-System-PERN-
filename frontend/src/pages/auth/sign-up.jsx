import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";

import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");

  const togglePasswordView = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordView = () => setShowConfirmPassword(!showConfirmPassword);

  const setCredentials = useStore((state) => state.setCredentails);
  const navigate = useNavigate();

  const isValidGmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  const isValidContact = (contact) => /^[0-9]{7,15}$/.test(contact);

  const handleSignUp = async () => {
    if (!firstname || !lastname || !email || !contact || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (!isValidGmail(email)) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    if (!isValidContact(contact)) {
      alert("Please enter a valid contact number (7–15 digits).");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstname,
          lastname,
          contact,
          password,
        }),
      });

      if (res.ok) {
        alert("Registration successful!");
        navigate("/sign-in");
      } else {
        const data = await res.json();
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="w-[90%] max-w-sm p-5 bg-gray-900 bg-opacity-80 backdrop-blur-lg flex flex-col items-center gap-3 rounded-xl shadow-lg z-10">
        <img src="/logo.png" alt="logo" className="w-14 h-14 object-cover rounded-full" />
        <h1 className="text-xl font-semibold text-white">Create an Account</h1>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <span
            className="text-white underline cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </span>
        </p>

        <div className="w-full flex flex-col gap-3">
          {/* Firstname */}
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="bg-gray-800 text-white text-sm p-2 rounded-xl outline-none"
          />

          {/* Lastname */}
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="bg-gray-800 text-white text-sm p-2 rounded-xl outline-none"
          />
             {/* Contact */}
          <input
            type="text"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="bg-gray-800 text-white text-sm p-2 rounded-xl outline-none"
          />

          {/* Email */}
          <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
            <MdAlternateEmail className="text-white" />
            <input
              type="email"
              placeholder="Gmail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-white text-sm"
            />
          </div>

       

          {/* Password */}
          <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
            <FaFingerprint className="text-white" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Confirm Password */}
          <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
            <FaFingerprint className="text-white" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-white text-sm"
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer text-white"
                onClick={toggleConfirmPasswordView}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer text-white"
                onClick={toggleConfirmPasswordView}
              />
            )}
          </div>
        </div>

        <button
          onClick={handleSignUp}
          className="w-full p-2 bg-green-500 rounded-xl mt-3 hover:bg-green-600 text-white text-sm"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
