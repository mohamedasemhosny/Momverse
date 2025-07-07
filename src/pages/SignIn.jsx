import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import signupImg from "@/assets/signup-img.png";
import googleIcon from "@/assets/google.svg";
import facebookIcon from "@/assets/Facebook.svg";
import appleIcon from "@/assets/apple.svg";
import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";
import { loginUser } from "@/features/auth/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Email and Password are required");
      return;
    }

    dispatch(loginUser(formData))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        toast.error("Login failed. Please check your credentials.");
        setFormData({ email: "", password: "" }); 
      });
  };

  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
      <div>
        <img src={signupImg} alt="signin" className="max-h-screen" />
      </div>

      <div className="md:w-[400px] mx-auto">
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Welcome to the Mothers
          </h2>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <InputFelid
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputFelid
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              name={loading ? "Signing In..." : "Sign In"}
              className="w-full bg-gradient-to-r from-bg to-[#6c5b50]"
              disabled={loading}
            />
          </form>

          <div className="w-full flex items-center justify-center mt-5 space-x-2">
            <span className="bg-secondary h-[1px] w-full"></span>
            <span className="text-nowrap text-sm text-secondary">
              Or Sign In with
            </span>
            <span className="bg-secondary h-[1px] w-full"></span>
          </div>

          <div className="flex items-center justify-center mt-5 space-x-3">
            <img
              src={googleIcon}
              alt="google"
              className="size-10 p-2 rounded-md border border-secondary cursor-pointer"
            />
            <img
              src={appleIcon}
              alt="apple"
              className="size-10 p-2 rounded-md border border-secondary cursor-pointer"
            />
            <img
              src={facebookIcon}
              alt="facebook"
              className="size-10 p-2 rounded-md border border-secondary cursor-pointer"
            />
          </div>

          <p className="mt-5">
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold text-[#6c5b50]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
