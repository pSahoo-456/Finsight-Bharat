import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Layout } from './Pages/Reports.jsx';
// import { Dashboard } from './VendorPage/Dashboard';
// import { Products } from './VendorPage/Products';
import Signup from "./Authentication/Signup";
import { Loader } from "lucide-react";
import Login from "./Authentication/Login";
import { useAuthStore } from "./contentStore/authStore.js";
import Home from "./Home/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
// import RouteOptimization from "./Pages/Reports.jsx";
import MainPage from "./Home/MainPage.jsx";
import MarketIntelegence from "./Pages/MarketIntelegence.jsx";
import Reports from "./Pages/Reports.jsx";
import ReportGeneration from "./Pages/ReportGeneration.jsx";
 import ExploreData from "./Pages/ExploreData.jsx";
import EconomicIndicator from "./Pages/EconomicIndicator.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
// import { useProductStore } from './contentStore/productStore.js';
// import ReportGeneration from "./Pages/ReportGeneration.jsx";

function App() {
  const { user, isChekingAuth, authCheck } = useAuthStore();
  useEffect(() => {
    authCheck();
    // console.log("authenticated user -->", user);
  }, [authCheck]);
  if (isChekingAuth) {
    // console.log("Heyyyy !!");
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }
  // console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/mainPage/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home/>}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="marketIntelegence" element={<MarketIntelegence/>} />
          <Route path="reports" element={<Reports />} />
          <Route path="exploreData" element={<ExploreData />} />
        </Route>
        <Route path="/economicIndicator" element={<EconomicIndicator/>} />
        <Route path="/marketIntelegence" element={<MarketIntelegence/>} />
        <Route path="/reportgeneration" element={<ReportGeneration/>} />



        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signin"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
