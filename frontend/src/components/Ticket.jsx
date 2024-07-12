import React from 'react';
import "../styles/Ticket.css"

function Ticket({ ticket, onDelete }) {
    const formattedDate = new Date(ticket.created_at).toLocaleDateString("en-US");

    return (
        <div className="ticket-container">    
            <p className="ticket-title">{ticket.title}</p>
            <p className="ticket-content">{ticket.content}</p>
            <p className="ticket-priority">Priority: {ticket.priority}</p>
            <p className="ticket-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(ticket.id)}>Delete</button>
        </div>
    );
}

export default Ticket;