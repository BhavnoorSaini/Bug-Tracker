import { useState, useEffect } from "react";
import api from "../api";
import Bug from "../components/Bug"
import "../styles/Home.css"

function Home() {
    const [bugs, setBugs] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getBugs();
    }, []);

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
            .post("/api/bugs/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Bug created!");
                else alert("Failed to make bug.");
                getBugs();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Bug Tracker</h2>
                {bugs.map((bug) => (
                    <Bug bug={bug} onDelete={deleteBug} key={bug.id} />
                ))}
            </div>
            <h2>Create a Bug</h2>
            <form onSubmit={createBug}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;