import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import AnnualPlan from "./pages/AnnualPlan";
import Activities from "./pages/Activities";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundLogo from "./components/BackgroundLogo";

export default function App(){
  return (
    <>
    <ScrollToTop/>
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cyberNeutral to-white">
      <Navbar />
        <BackgroundLogo /> 
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/annual-plan" element={<AnnualPlan />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  );
}
