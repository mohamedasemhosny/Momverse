import { Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Fav from "./pages/Fav";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Setting from "./pages/Setting";
import Language from "./pages/Language";
import ChangePassword from "./pages/ChangePassword";
import Information from "./pages/Information";
import Pregnancy from "./pages/Pregnancy";
import Activate from "./pages/Activate";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import Consultation from "./pages/Consultation";
import HealthTracker from "./pages/HealthTracker";
import LatestStudies from "./pages/LatestStudies";
import Reminders from "./pages/Reminders";
import MentalHealth from "./pages/MentalHealth";
import Breastfeeding from "./pages/Breastfeeding";
import Sleeping from "./pages/Sleeping";
import Diaper from "./pages/Diaper";
import Feeding from "./pages/Feeding";
import Vaccinations from "./pages/Vaccinations";
import Growth from "./pages/Growth";
import DoctorPage from "./pages/DoctorPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/language" element={<Language />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/info" element={<Information />} />
        <Route path="/pregnancy" element={<Pregnancy />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/doctor/:id" element={<DoctorPage />} />
        <Route path="/health" element={<HealthTracker />} />
        <Route path="/latest" element={<LatestStudies />} />
        <Route path="/mental" element={<MentalHealth />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/breastfeeding" element={<Breastfeeding />} />
        <Route path="/sleeping" element={<Sleeping />} />
        <Route path="/diaper" element={<Diaper />} />
        <Route path="/feeding" element={<Feeding />} />
        <Route path="/vaccinations" element={<Vaccinations />} />
        <Route path="/growth" element={<Growth />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
