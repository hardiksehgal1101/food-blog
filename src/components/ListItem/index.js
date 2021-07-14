import React from "react";
import "./styles.css";
function ListItem({ imgSrc, title, description }) {
	return (
		<div className="listItem">
			<div className="listItem__media">
				<img className="listItem__img" src={imgSrc} alt="" />
			</div>
			<div className="listItem__text">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ListItem;
