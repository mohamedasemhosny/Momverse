import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import signupImg from "@/assets/signup-img.png";
import googleIcon from "@/assets/google.svg";
import facebookIcon from "@/assets/Facebook.svg";
import appleIcon from "@/assets/apple.svg";
import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";
import { Link } from "react-router-dom";
import { registerUser } from "@/features/auth/authSlice";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, phoneNumber, password } = formData;
    if (!username || !email || !phoneNumber || !password) {
      toast.error("please fill all the fields.");
      return;
    }

    dispatch(registerUser(formData));
  };

  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
      <div>
        <img src={signupImg} alt="signup" className="max-h-screen" />
      </div>

      <div className="md:w-[400px] mx-auto">
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Welcome to the Mothers
          </h2>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <InputFelid
              label="Username"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />

            <InputFelid
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputFelid
              label="Phone Number"
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
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
              name={loading ? "Signing Up..." : "Sign Up"}
              className="w-full bg-gradient-to-r from-bg to-[#6c5b50]"
              disabled={loading}
            />
          </form>

          <div className="w-full flex items-center justify-center mt-5 space-x-2">
            <span className="bg-secondary h-[1px] w-full"></span>
            <span className="text-nowrap text-sm text-secondary">
              Or Sign Up with
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
            Already have an account?{" "}
            <Link to="/signin" className="font-bold text-[#6c5b50]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
