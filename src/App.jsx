import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Fixed the import
import SignUp from "./components/SignUp";  // Ensure the path is correct based on your project structure
import SignIn from "./components/SignIn";  // Ensure the path is correct based on your project structure
import Home from "./components/Home";  // Ensure the path is correct based on your project structure
import "./app.css";  // Your custom CSS for styles

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home */}
        <Route path="/" element={<Home />} />

        {/* Route for SignUp */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for SignIn */}
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;

