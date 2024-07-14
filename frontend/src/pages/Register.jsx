import React from "react";
import Form from "../components/Form";
import "../styles/Auth.css";

function Register() {
    return (
        <div className="center-container">
            <header className="header">
                <h1>Bug Tracker</h1>
            </header>
                <label htmlFor="login" className="title-label">Register</label>
                <Form route="/api/user/register/" method="register" />
            <footer className="footer">
                <p>&copy; 2024 Bug Tracker</p>
            </footer>
        </div>
    );
}

export default Register;