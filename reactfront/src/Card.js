import React from "react";

export default function Card ({image, titre, message}) {
    return (
        <div className="card mb-5 mx-auto" style={{maxWidth: "400px"}}>
            <div className="card-body">
                <h5 className="card-title">{titre}</h5>
                <p className="card-text">{message}</p>
            </div>
        </div>
    )
}