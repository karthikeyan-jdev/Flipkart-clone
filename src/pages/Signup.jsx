import React, { useState } from "react";
import loginImg from "../assets/img/login-img.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { Signup } = useAuth();
  const [userName, setUserName] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = Signup(userName, email, password);
    if (success) {
      alert("Sign up!");
    } else {
      alert("Sign failed!");
    }
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-[88vh] sm:h-[86vh] bg-gray-200">
      {" "}
      <div className="flex h-[550px] sm:h-[400px] md:h-[500px]">
        {/* first box */}
        <div className="hidden w-[240px] md:w-[300px] bg-primary sm:flex flex-col justify-between">
          <div className="text-white pt-12 px-6 space-y-1.5 md:space-y-2.5">
            <h4 className="font-bold text-2xl md:text-3xl">
              Looks like you're new here!
            </h4>
            <p className="text-[12px] md:text-[14px]">
              Sign up with your mobile number to get started{" "}
            </p>
          </div>
          <div className="pb-4">
            <img src={loginImg} alt="login-img" className="w-full" />
          </div>
        </div>
        {/* secend box */}
        <div className="bg-white p-6 py-8 sm:pt-16 w-full sm:w-[380px] text-[12px] md:w-[430px] md:text-[14px] h-full">
          <form onSubmit={(e) => handleLogin(e)} className="space-y-3 ">
            <div className="sm:hidden">
              <h5 className="font-semibold text-[12px] md:text-[14px]">
                Log in for best exeperience
              </h5>
              <p className="text-gray-500">enter your Email to continue</p>
            </div>
            <input
              type="name"
              placeholder="Name"
              className="border-b border-gray-300 w-full p-1 outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
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
            <div className="bg-orange-400 text-white text-center py-2">
              {" "}
              <button type="submit">Login</button>
            </div>
            <div className="bg-white text-primary text-center py-2 shadow-sm transition-shadow">
              {" "}
              <button type="button" onClick={() => navigate("/login")}>
                Existing User? Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
