import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

/* Menu changes according to data type. */

const Menu = ({ snacks, drinks }) => {
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					{snacks && (
						<CardTitle className="font-weight-bold text-center">Food Menu</CardTitle>
					)}
					{drinks && (
						<CardTitle className="font-weight-bold text-center">Bar Menu</CardTitle>
					)}
					<CardText>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</CardText>
					{snacks && (
						<ListGroup>
							{snacks.map((snack) => (
								<Link to={`/snacks/${snack.id}`} key={snack.id}>
									<ListGroupItem>{snack.name}</ListGroupItem>
								</Link>
							))}{" "}
						</ListGroup>
					)}

					{drinks && (
						<ListGroup>
							{drinks.map((drink) => (
								<Link to={`/drinks/${drink.id}`} key={drink.id}>
									<ListGroupItem>{drink.name}</ListGroupItem>
								</Link>
							))}
						</ListGroup>
					)}
				</CardBody>
			</Card>
		</section>
	);
};

export default Menu;
