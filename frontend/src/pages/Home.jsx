import { useState, useEffect } from "react";
import api from "../api";
import Ticket from "../components/Ticket";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [priority, setPriority] = useState("medium");
    const [tickets, setTickets] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [author, setAuthor] = useState(""); 
    const navigate = useNavigate();

    useEffect(() => {
        getTickets();
        getUserInfo();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const getTickets = () => {
        api.get("/api/tickets/")
            .then((res) => setTickets(res.data))
            .catch((err) => alert(err));
    };

    const getUserInfo = () => {
        api.get("/api/user-info/")
            .then((res) => setIsAdmin(res.data.is_admin))
            .catch((err) => alert(err));
    };

    const deleteTicket = (id) => {
        api.delete(`/api/tickets/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Ticket deleted!");
                else alert("Failed to delete ticket.");
                getTickets();
            })
            .catch((error) => alert(error));
    };

    const createTicket = (e) => {
        e.preventDefault();
        const ticketData = { content, title, priority };
        if (isAdmin && author) {
            ticketData.author = author;
        }
        api.post("/api/tickets/", ticketData)
            .then((res) => {
                if (res.status === 201) {
                    alert("Ticket created!");
                    setTitle("");
                    setContent("");
                    setPriority("medium");
                    setAuthor(""); 
                    getTickets();
                } else {
                    alert("Failed to create ticket.");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1>Bug Tracker</h1>
                {isAdmin && <p>Logged in as admin</p>}
            </header>
            <div className="form-container">
                <h2>Create a Ticket</h2>
                <form onSubmit={createTicket}>
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
                    {isAdmin && (
                        <>
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </>
                    )}
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="tickets-section">
                {tickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket} onDelete={deleteTicket} />
                ))}
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <footer className="footer">
                <p>&copy; 2024 Bug Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;