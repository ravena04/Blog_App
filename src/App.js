import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import CreatePost from "./pages/CreatePost"; // Import the CreatePost page
import MyBlogs from "./pages/MyBlogs"; // Import the MyBlogs page
import Categories from "./pages/Categories"; // Import the Categories page
import CategoryPage from './CategoryPage';
import SubscriptionPage from "./pages/SubscriptionPage";
import AllBlogs from "./pages/AllBlogs";

import { UserContextProvider } from "./UserContext"; 
import './Post';  // Ensure Post-related styles or logic are included here

const App = () => {
  const[profilename,setProfilename]=useState("")
  useEffect(()=>{
    console.log("Profile Name",profilename)
  },[profilename])
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Initial Landing Page */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage  setProfilename={setProfilename}/>} />
          <Route path="/home" element={<IndexPage />} /> {/* Home Page */}
          <Route path="/create-post" element={<CreatePost author={profilename} />} /> {/* Create Post Page */}
          <Route path="/myblogs" element={<MyBlogs author={profilename} />} /> {/* My Blogs Page */}
          <Route path="/categories" element={<Categories />} /> {/* Categories Page */}
          <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Updated route */}
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/allblogs" element={<AllBlogs />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
