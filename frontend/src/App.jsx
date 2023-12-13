import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import HomeLayout from "./layouts/HomeLayout";
import MemberLayout from "./layouts/MemberLayout";

// Zone Admi Prive 
import LoginAdmin from "./pages/admin/auth/LoginAdmin";
import Products from "./pages/admin/products/Products";
import Statistiques from "./pages/admin/statistiques/Statistiques";

// zone member prive
import LoginMember from "./pages/member/auth/LoginMember"; // public
import ProfileMember from "./pages/member/profile/Profile";

// zone accueil home public
import Home from "./pages/home/Home";

 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/login-member" element={<LoginMember />} />
        <Route path="/login-admin" element={<LoginAdmin />} />

        <Route path="/dashboard-member" element={<MemberLayout />}>
          <Route index element={<ProfileMember />} />
        </Route>

        <Route path="/dashboard-admin" element={<AdminLayout />}>
          <Route index element={<Products />} />
          <Route path="statistiques" element={<Statistiques />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
