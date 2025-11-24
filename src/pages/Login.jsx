import React, { useState } from "react";
import loginImg from "../assets/img/login-img.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      alert("Logged in!");
    } else {
      alert("Login failed!");
    }
    navigate("/")
  };
  return (
    <div className="flex justify-center items-center h-[88vh] sm:h-[86vh] bg-gray-200">
      {" "}
      <div className="flex h-[550px] sm:h-[400px]">
        {/* first box */}
        <div className="hidden w-[210px] bg-primary sm:flex flex-col justify-around">
          <div className="text-white p-4 pt-6 space-y-1.5 ">
            <h4 className="font-bold text-2xl">Login</h4>
            <p className="text-[12px]">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div className="">
            <img src={loginImg} alt="login-img" className="w-full" />
          </div>
        </div>
        {/* secend box */}
        <div className="bg-white flex flex-col justify-around p-6 py-8 sm:p-5 w-full sm:w-[280px] text-[12px] md:w-[280px] md:text-[14px] h-full">
          {" "}
          <form onSubmit={(e) => handleLogin(e)} className="space-y-3 ">
            <div className="sm:hidden">
              <h5 className="font-semibold text-[13px]">
                Log in for best exeperience
              </h5>
              <p className="text-gray-500">enter your Email to continue</p>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-300 w-full p-1 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Passward"
              className="border-b border-gray-300 w-full p-1 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-gray-700 text-[10px] w-[90%]">
              By continuing, you agree to Flipkart's{" "}
              <span className="text-primary">Terms of Use</span> and{" "}
              <span className="text-primary">Privacy Policy.</span>
            </p>
            <div className="bg-orange-400 text-white text-center py-1.5">
              {" "}
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="text-primary text-center text-[16px] sm:text-[12px]">
            New to Flipkart?{" "}
            <a href="/login" className="">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
