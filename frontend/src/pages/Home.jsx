import { useState, useEffect } from "react";
import api from "../api";
import Bug from "../components/Bug";
import "../styles/Home.css";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

function Home() {
    const [bugs, setBugs] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium");
    const navigate = useNavigate();

    useEffect(() => {
        getBugs();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const getBugs = () => {
        api
            .get("/api/bugs/")
            .then((res) => res.data)
            .then((data) => {
                setBugs(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteBug = (id) => {
        api
            .delete(`/api/bugs/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Bug deleted!");
                else alert("Failed to delete bug.");
                getBugs();
            })
            .catch((error) => alert(error));
    };

    const createBug = (e) => {
        e.preventDefault();
        api
            .post("/api/bugs/", { content, title, priority })
            .then((res) => {
                if (res.status === 201) alert("Bug created!");
                else alert("Failed to make bug.");
                getBugs();
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <div className="center-container">
             <h2>Bug Tracker</h2>
            </div>
            <h2 className="center-container">Create a Ticket</h2>
            <form onSubmit={createBug}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div>
                {bugs.map((bug) => (
                    <Bug key={bug.id} bug={bug} onDelete={deleteBug} />
                ))}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;