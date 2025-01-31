import React, { useState } from "react";

const SubscriptionPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Use mailto to open email client with pre-filled recipient and subject
    const subject = "New Blog Subscription";
    const body = `A new user has subscribed with the email: ${email}`;
    const mailtoLink = `mailto:ravena.s2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client with pre-filled details
    window.location.href = mailtoLink;

    setMessage("Subscription successful! A confirmation email will be sent.");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 10px 20px rgba(0, 0, 255, 0.15)", padding: "40px", width: "100%", maxWidth: "400px" }}>
        <h1 style={{ color: "#333", marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>Subscribe to Our Blog</h1>
        <p style={{ color: "#666", fontSize: "1.2rem", marginBottom: "25px" }}>
          Stay updated with the latest posts and news. Enter your email below to subscribe!
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "12px",
              marginBottom: "15px",
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
              width: "100%",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
          >
            Subscribe Now
          </button>
        </form>
        {message && <p style={{ marginTop: "20px", color: "#555", fontSize: "1rem" }}>{message}</p>}
      </div>
    </div>
  );
};

export default SubscriptionPage;
