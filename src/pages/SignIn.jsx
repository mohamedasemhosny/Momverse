// src/pages/SignIn.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import signupImg from "@/assets/signup-img.png";
import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";  // using your existing component
import { loginUser } from "@/features/auth/authSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      .catch((err) => {
        toast.error(err?.message || "Login failed. Please check your credentials.");
        setFormData({ email: "", password: "" });
      });
  };

  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
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
              required
            />

            <InputFelid
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              name={loading ? "Signing In..." : "Sign In"}
              className="w-full bg-gradient-to-r from-bg to-[#6c5b50]"
              disabled={loading}
            />
          </form>


          <p className="mt-5">
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold text-[#6c5b50]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      <div>
        <img src={signupImg} alt="signin" className="max-h-screen" />
      </div>
    </div>
  );
}
