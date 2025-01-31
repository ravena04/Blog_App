import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState("");  // State to track registration status
  const navigate = useNavigate();

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      setRegistrationStatus("Signed up successfully! You can now log in.");
      navigate("/login"); // Redirect to login page after successful signup
    } else {
      setRegistrationStatus("User exists already. Try logging in.");
    }
  }

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to LoginPage.js
  };

  return (
    <div className="register-container">
      <div className="register">
        <h1>Join Our Community</h1>
        <p className="subheading">Create your account to start sharing your thoughts with the world.</p>
        
        <form onSubmit={register}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={ev => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <button>Sign Up</button>
        </form>

        {registrationStatus && (
          <div className="registration-status">
            {registrationStatus}
            {registrationStatus === "User exists already. Try logging in." && (
              <button onClick={handleLoginRedirect}>Go to Login</button>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        /* RegisterPage Styles */
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
          font-family: 'Poppins', sans-serif;
          background: white;
        }

        .register {
          background-color: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          text-align: center;
        }

        .register h1 {
          font-size: 36px;
          color: #333;
          margin-bottom: 15px;
          font-family: 'Roboto', sans-serif;
        }

        .subheading {
          font-size: 18px;
          color: #555;
          margin-bottom: 30px;
          font-family: 'Open Sans', sans-serif;
        }

        .register input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s;
        }

        .register input:focus {
          border-color: #007bff;
          outline: none;
        }

        .register button {
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

        .register button:hover {
          background-color: #0056b3;
        }

        .registration-status {
          text-align: center;
          margin-top: 20px;
          font-size: 16px;
          color: #ff0000;
        }

        .registration-status button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .registration-status button:hover {
          background-color: #218838;
        }

        /* Additional styling for mobile responsiveness */
        @media (max-width: 600px) {
          .register {
            padding: 20px;
            width: 90%;
          }

          .register h1 {
            font-size: 30px;
          }

          .subheading {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
