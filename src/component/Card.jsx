import React from "react"


export default function Card(props) {
    // the logic for the bageText comes here
    let badgeText;
    if(props.openSpots === "") {
        badgeText = "reserved"
    }else if (props.location === "Persia"){
        badgeText = <a href="https://www.google.com/maps/@35.734523,51.3365315,15z?entry=ttu" target="__blank">	&#127919;</a>
    }else {
        badgeText = "online"
    }

    function handleMouseOver() {
       
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{}</div>}
            <img src={props.coverImg} className="card--image" onMouseOver={handleMouseOver} alt=""/>
            {/* <div className="card--stats">                
                <span>	&#11088; {props.stats.rating}</span>
                <span className="gray">&#129417; ({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div> */}
            <p>{props.title}</p>
            
            <p><span className="bold"> ${props.price}</span></p>
            <p>&#129417; {props.description}</p>
            {/* <p>{props.openSpots}</p> */}
        </div>
    )
}
