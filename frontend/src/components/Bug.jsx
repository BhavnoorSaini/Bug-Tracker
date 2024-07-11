import React from 'react';
import "../styles/Bug.css"

function Bug({ bug, onDelete }) {
    const formattedDate = new Date(bug.created_at).toLocaleDateString("en-US");

    return (
        <div className="bug-container">    
            <p className="bug-title">{bug.title}</p>
            <p className="bug-content">{bug.content}</p>
            <p className="bug-priority">Priority: {bug.priority}</p>
            <p className="bug-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(bug.id)}>Delete</button>
        </div>
    );
}

export default Bug;