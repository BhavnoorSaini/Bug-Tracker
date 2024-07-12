import React from "react";
import Form from "../components/Form";
import "../styles/Auth.css";

function Register() {
    return (
        <div className="center-container">
            <header className="header">
                <h1>Bug Tracker</h1>
            </header>
            <div className="form-container">
                <h2>Register</h2>
                <Form route="/api/register/" method="register" />
            </div>
            <footer className="footer">
                <p>&copy; 2024 Bug Tracker</p>
            </footer>
        </div>
    );
}

export default Register;