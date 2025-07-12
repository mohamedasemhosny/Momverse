import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import signupImg from "@/assets/signup-img.png";
import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";
import { Link } from "react-router-dom";
import { registerUser } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        navigate('/', { state: { justRegistered: true } });
      })
      .catch(() => {
        // error is already in Redux state, so we don’t need to do anything here
      });
  };

  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
      <div>
        <img src={signupImg} alt="signup" className="max-h-screen" />
      </div>
            {error && (
        <div className="mb-4 px-4 py-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

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
          placeholder="Your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <InputFelid
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputFelid
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          placeholder="+1 555 1234"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <InputFelid
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          name={loading ? 'Signing Up…' : 'Sign Up'}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-bg to-[#6c5b50] text-white"
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

