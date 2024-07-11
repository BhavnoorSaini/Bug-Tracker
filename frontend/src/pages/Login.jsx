import React from "react";
import Form from "../components/Form";
import "../styles/Auth.css";

function Login() {
    return (
        <div className="center-container">
            <h2>Login</h2>
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login;