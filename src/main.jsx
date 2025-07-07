import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
