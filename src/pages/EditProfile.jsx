import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";
import { updateUserProfile } from "@/features/auth/authSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center m-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-[400px]"
      >
        <InputFelid
          label="Full Name"
          type="text"
          name="username"
          placeholder="Enter your full name"
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

export default EditProfile;
