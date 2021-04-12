import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";
// anytime we rely on component that needs to be inside a router, use MemoryRouter
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
	render(
		//version is browser router that doesn't need to use browser
		<MemoryRouter>
			<NavBar />
		</MemoryRouter>
	);
});

it("matches snapshot", function () {
	const container = render(
		<MemoryRouter>
			<NavBar />
		</MemoryRouter>
	);
	expect(container.asFragment()).toMatchSnapshot();
});
