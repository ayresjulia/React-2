import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const Home = ({ snacks, drinks }) => {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<p className="font-weight-bold">
							Welcome to Silicon Valley's premier dive cafe!
						</p>
						<p>
							Currently there are {snacks.length} snacks and {drinks.length} drinks
							available.
						</p>
						<p>Enjoy!</p>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
};

export default Home;
