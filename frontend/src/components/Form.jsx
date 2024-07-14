import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [priority, setPriority] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post(route, {
                username,
                password,
                priority: method !== "login" && method !== "register" ? priority : undefined,
                is_admin: method === "register" ? isAdmin : undefined,
            });
            console.log(response.data);
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
            navigate("/"); // Redirect to the dashboard or another page
        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {method !== "login" && method !== "register" && (
                <input
                    className="form-input"
                    type="text"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    placeholder="Priority"
                />
            )}
            {method === "register" && (
                <label>
                    <input
                        type="checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    />
                    Register as Admin
                </label>
            )}
            <button type="submit" className="form-button">
                {loading ? <LoadingIndicator /> : "Submit"}
            </button>
            {method === "login" ? (
                <button
                    type="button"
                    className="form-button"
                    onClick={() => navigate("/register")}
                >
                    Register Instead
                </button>
            ) : (
                <button
                    type="button"
                    className="form-button"
                    onClick={() => navigate("/login")}
                >
                    Login Instead
                </button>
            )}
        </form>
    );
}

export default Form;