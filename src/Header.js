import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import logoImage from './blg.png';  // Import the image

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("https://blogapp-backend-ttjx.onrender.com/profile", {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };
    fetchUserInfo();
  }, [setUserInfo]);

  const logout = async () => {
    try {
      await fetch('https://blogapp-backend-ttjx.onrender.com/logout', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      setUserInfo(null);
      navigate('/');
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logoImage} alt="Blogify Logo" height="60" style={styles.logoImage} /> {/* Increased height */}
      </div>
      <nav style={styles.navigation}>
        <a href="/" style={styles.navLink}>Home</a>
       
        <a href="/myblogs" style={styles.navLink}>My Blogs</a>
        <a href="/allblogs" style={styles.navLink}>Blogs</a>
        <a href="/subscription" style={styles.navLink}>Subscription</a>
        <a href="/categories" style={styles.navLink}>Explore other Blogs</a>
      </nav>
      <div style={styles.actions}>
        <Link to="/create-post">
          <button style={styles.createPostButton}>Create Blog</button>
        </Link>

        {userInfo ? (
          <button
            style={styles.createPostButton} // Apply same style as Create Post button
            onClick={logout}
          >
            Logout
          </button>
        ) : null}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "15px 30px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "60px",  // Increased height
    width: "auto",   // Adjust width automatically
    marginRight: "10px",
  },
  navigation: {
    display: "flex",
  },
  navLink: {
    margin: "0 15px",
    fontSize: "18px",
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease, transform 0.3s ease",
    borderRadius: "25px",  // Rounded corners
    padding: "8px 20px",   // Padding for rounded effect
    backgroundColor: "rgba(0, 123, 255, 0.1)",  // Transparent background
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  createPostButton: {
    backgroundColor: "transparent",
    color: "#007bff",
    border: "2px solid #007bff",
    padding: "10px 15px",
    borderRadius: "25px",  // Rounded corners
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

export default Header;
