import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"; // Importing Router components
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";
import ContactUs from "./pages/static_pages/ContactUs";
import AboutUs from "./pages/static_pages/AboutUs";
import UpcomingFeatures from "./pages/static_pages/UpcomingFeatures";
import Services from "./pages/static_pages/Services";

// Protected Route Component ✅
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return token ? children : null; // ✅ अगर token है तभी children show करो
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/upcoming-feature" element={<UpcomingFeatures />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
