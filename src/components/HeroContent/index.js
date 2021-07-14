import React from "react";
import "./styles.css";
import image_1 from "./../../images/1.jpg";
import img_2 from "./../../images/2.jpg";
import img_3 from "./../../images/3.jpg";

function HeroContent() {
	return (
		<div className="container">
			<div className="container__text">
				<h1>Our Blogs</h1>
				<p>
					Satisfy your cravings by gettin the food you love from your
					favourite restaurants delieverd to you fast.OURFOOD is now
					available in selected areas of london
				</p>
				<p>
					Satisfy your cravings by gettin the food you love from your
					favourite restaurants delieverd to you fast.OURFOOD is now
					available in selected areas of london
				</p>

				<div className="small__images">
					<img className="img" src={img_2} alt="" />
					<img className="img" src={img_3} alt="" />
				</div>
			</div>

			<div className="container__image">
				<img className="image_1" src={image_1} alt="" />
			</div>
		</div>
	);
}

export default HeroContent;
