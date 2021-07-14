import React from "react";
import Card from "../Card";
import "./styles.css";

const CardList = () => {
	return (
		<div className="cardList__container">
			<div className="container__title">
				<h1>Story Behind the Food Blog</h1>
			</div>
			<div className="cardList__row">
				<Card
					imgSrc="https://images.unsplash.com/photo-1612392061787-2d078b3e573c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"
					title="Lorem ipsum Doler"
					description="Lorem ipsum Doler Lorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum Doler"
				/>
				<Card
					imgSrc="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
					title="Lorem ipsum Doler"
					description="Lorem ipsum Doler Lorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum Doler"
				/>
				<Card
					imgSrc="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
					title="Lorem ipsum Doler"
					description="Lorem ipsum Doler Lorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum Doler"
				/>
			</div>
			<div className="cardList__row">
				<Card
					imgSrc="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
					title="Lorem ipsum Doler"
					description="Lorem ipsum Doler Lorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum Doler"
				/>
				<Card
					imgSrc="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
					title="Lorem ipsum Doler"
					description="Lorem ipsum Doler Lorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum Doler"
				/>
				<Card
					imgSrc="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=80"
					title="Lorem ipsum Doler"
					description="Lorem ipsum Doler Lorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum DolerLorem ipsum Doler"
				/>
			</div>
		</div>
	);
};

export default CardList;
