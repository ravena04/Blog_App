import React from "react";
import { Link } from "react-router-dom";
import blogLogo from '../blg.png';  // Importing the logo image

const LandingPage = () => {
  return (
    <div style={styles.landingPage}>
      <div style={styles.content}>
        <img
          src={blogLogo}  // Using the imported image
          alt="BlogVerse Logo"
          style={styles.logo}
          className="bounce"
        />
        <h1 style={styles.heading}>Welcome to BlogVerse</h1>
        <p style={styles.tagline}>Create, Publish, Connect – The Blog You've Always Dreamed Of.</p>
        <p style={styles.description}>Join the community of passionate bloggers and connect with like-minded individuals!</p>

        <div style={styles.buttons}>
          <Link to="/login">
            <button style={styles.getStartedBtn}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  landingPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "transparent",
    fontFamily: "'Poppins', sans-serif", // Stylish font
    color: "#333",
  },
  content: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#fff",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    maxWidth: "700px",
    width: "100%",
    transition: "transform 0.3s ease-in-out",
  },
  logo: {
    width: "250px",  // Increased image size
    marginBottom: "30px",  // Adjusted margin
    marginTop: "40px",  // Added top margin to push the image down
    animation: "bounce 2s ease infinite", // Applying the bounce effect here
  },
  heading: {
    fontSize: "28px",  // Reduced heading size for a more balanced look
    color: "#333", // Darker color for the heading
    fontFamily: "'Lora', serif", // Stylish font
    fontWeight: "700",
    margin: "10px 0",
  },
  tagline: {
    fontSize: "20px",
    color: "#007BFF", // Light blue for the tagline
    fontFamily: "'Lora', serif",
    fontWeight: "400",
    margin: "10px 0",
  },
  description: {
    fontSize: "16px",
    color: "#555", // Lighter gray for description
    fontFamily: "'Poppins', sans-serif", // Stylish font
    fontWeight: "300",
    marginBottom: "20px",
  },
  buttons: {
    marginTop: "20px",
  },
  getStartedBtn: {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    fontFamily: "'Poppins', sans-serif", // Stylish font for button
  },
};

// Adding bounce animation via keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`, styleSheet.cssRules.length);

export default LandingPage;
