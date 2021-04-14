import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

/* Menu changes according to data type. */

const Menu = ({ items, title }) => {
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">{title}</CardTitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</CardText>
					{items && (
						<ListGroup>
							{items.map((item) => (
								<Link to={`/${title}/${item.id}`} key={item.id}>
									<ListGroupItem>{item.name}</ListGroupItem>
								</Link>
							))}{" "}
						</ListGroup>
					)}
				</CardBody>
			</Card>
		</section>
	);
};

export default Menu;
