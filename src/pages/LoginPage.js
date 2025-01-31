import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(""); // State for login success message
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setLoginSuccess("Login Successful! Redirecting to home...");
        setTimeout(() => {
          navigate("/home"); // Redirect to IndexPage.js after successful login
        }, 2000); // Redirect after 2 seconds to show success message
      } else {
        setLoginSuccess("Invalid username or password");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setLoginSuccess("Login failed. Please try again.");
    }
  } 
  return (
    <div className="login-container">
      <div className="login">
        <h1>Welcome Back!</h1>
        <p className="login-description">Please enter your credentials to continue</p>

        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(ev) => {
              setUsername(ev.target.value);
              window.localStorage.setItem('author',ev.target.value);
            
            }
              
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        {loginSuccess && (
          <p className="login-success-message">{loginSuccess}</p>
        )}

        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} className="link-text">
            Sign up here
          </span>
        </p>
      </div>

      <style jsx>{`
        /* LoginPage Styles */
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
          font-family: 'Poppins', sans-serif;
        }

        .login {
          background-color: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .login h1 {
          font-size: 35px;
          color: #333;
          text-align: center;
          margin-bottom: 10px;
          font-family: 'Roboto', sans-serif;
        }

        .login-description {
          text-align: center;
          font-size: 18px;
          color: #666;
          margin-bottom: 20px;
        }

        .login input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s;
        }

        .login input:focus {
          border-color: #007bff;
          outline: none;
        }

        .login button {
          width: 100%;
          padding: 14px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 18px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .login button:hover {
          background-color: #0056b3;
        }

        .signup-link {
          text-align: center;
          margin-top: 20px;
          font-size: 16px;
        }

        .link-text {
          color: #007bff;
          cursor: pointer;
        }

        .link-text:hover {
          text-decoration: underline;
        }

        /* Styles for the success message */
        .login-success-message {
          color: #28a745;
          font-size: 16px;
          text-align: center;
          margin-top: 15px;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
}
