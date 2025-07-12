import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  login,
  register,
  fetchProfile,
  updateProfile,
  changePassword,
} from "./authServices";
import toast from "react-hot-toast";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

// Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await register(userData);
      toast.success("Registered successfully");
      return data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Registration failed");
      return rejectWithValue(err.response.data);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await login(userData);
      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully");
      return data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
      return rejectWithValue(err.response.data);
    }
  }
);

// Get Profile
export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchProfile();
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (err) {
      toast.error("Failed to fetch profile");
      return rejectWithValue(err.response.data);
    }
  }
);

// Update Profile
export const updateUserProfile = createAsyncThunk(
  "auth/updateProfile",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await updateProfile(formData);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Profile updated successfully");
      return data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to update profile");
      return rejectWithValue(err.response.data);
    }
  }
);

// Change Password
export const updatePassword = createAsyncThunk(
  "auth/changePassword",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await changePassword(formData);
      toast.success("Password changed successfully");
      return data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to change password");
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
      toast.success("Logged out");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get Profile
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      // Update Profile
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Change Password
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
