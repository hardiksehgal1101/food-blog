import React from "react";
import "./styles.css";

function Card({imgSrc, title, description, button}) {
	return (
        <div className="card__container">
            <div className="card">
			<div className="card__media">
				<img className="card__image" src={imgSrc} alt="" />
			</div>
			<div className="card__content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			{button && 
                <div className="card__actions">
				<button className="button">
                    View More
                </button>
			</div>}
		</div>
        
        </div>
		
	);
}

export default Card;
