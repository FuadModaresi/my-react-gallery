import React from "react";


export default function Contact(props) {
    
    return (   
        <div className="contact-card">
            <img src={props.img} alt=""/>
            <h3>{props.name}</h3>

            <div className="info-group">
                <a href="./#">&#128222;</a>
                <p>{props.tel}</p>
            </div>

            <div className="info-group">
                <a href="./#">&#128231;</a>
                <p>{props.mail}</p>
            </div>
        </div>

        
    )
}