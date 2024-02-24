import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import Header from "./components/Header";
import Footer from "./components/Footer"
import PrivateRoutes from "./components/PrivateRoutes";
import AdminPrivateRoutes from "./components/AdminPrivateRoutes";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AdminPrivateRoutes />}>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
