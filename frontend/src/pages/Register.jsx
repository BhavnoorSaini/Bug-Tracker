import React from "react";
import Form from "../components/Form";
import "../styles/Auth.css";

function Register() {
    return (
        <div className="center-container">
            <h2>Register</h2>
            <Form route="/api/user/register/" method="register" />
        </div>
    );
}

export default Register;