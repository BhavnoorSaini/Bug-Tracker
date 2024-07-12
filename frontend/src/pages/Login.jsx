import React from "react";
import Form from "../components/Form";
import "../styles/Auth.css";

function Login() {
    return (
        <div className="center-container">
            <header className="header">
                <h1>Bug Tracker</h1>
            </header>
                <label htmlFor="login" className="title-label">Login</label>
                <Form route="/api/token/" method="login" />
            <footer className="footer">
                <p>&copy; 2024 Bug Tracker</p>
            </footer>
        </div>
    );
}

export default Login;