import { useState, useEffect } from "react";
import api from "../api";
import Ticket from "../components/Ticket";
import "../styles/Home.css";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

function Home() {
    const [tickets, setTickets] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium");
    const navigate = useNavigate();

    useEffect(() => {
        getTickets();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const getTickets = () => {
        api
            .get("/api/tickets/")
            .then((res) => res.data)
            .then((data) => {
                setTickets(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteTicket = (id) => {
        api
            .delete(`/api/tickets/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Ticket deleted!");
                else alert("Failed to delete ticket.");
                getTickets();
            })
            .catch((error) => alert(error));
    };

    const createTicket = (e) => {
        e.preventDefault();
        api
            .post("/api/tickets/", { content, title, priority })
            .then((res) => {
                if (res.status === 201) alert("Ticket created!");
                else alert("Failed to make ticket.");
                getTickets();
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <div className="center-container">
             <h2>Bug Tracker</h2>
            </div>
            <h2 className="center-container">Create a Ticket</h2>
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
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div>
                {tickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket} onDelete={deleteTicket} />
                ))}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;