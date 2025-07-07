import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";
import { updatePassword } from "@/features/auth/authSlice";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword.length < 6) {
      return toast.error("New password must be at least 6 characters.");
    }

    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("New password and confirmation do not match.");
    }

    dispatch(
      updatePassword({
        oldPassword: formData.password,
        newPassword: formData.newPassword,
      })
    );

    setFormData({
      password: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col gap-10 items-center justify-center m-2">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#6C5C50]">Change Password</h1>
        <p className="text-lg">
          The password should have at least 6 characters.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 w-full max-w-[400px]"
      >
        <InputFelid
          label="Current Password"
          type="password"
          name="password"
          placeholder="Current Password"
          value={formData.password}
          onChange={handleChange}
        />

        <InputFelid
          label="New Password"
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={handleChange}
        />

        <InputFelid
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button
          type="submit"
          name={loading ? "Saving..." : "Save"}
          className="w-full bg-gradient-to-r from-bg to-[#6c5b50]"
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default ChangePassword;
