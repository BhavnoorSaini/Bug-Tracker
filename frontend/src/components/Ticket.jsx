import React from "react";

function Ticket({ ticket, onDelete }) {
    return (
        <div className="ticket">
            <h3>{ticket.title}</h3>
            <p>{ticket.content}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Author: {ticket.author}</p>
            <button onClick={() => onDelete(ticket.id)}>Delete</button>
        </div>
    );
}

export default Ticket;