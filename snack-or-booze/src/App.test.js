import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("home route", () => {
	render(
		<MemoryRouter initialEntries={[ "/" ]}>
			<App />
		</MemoryRouter>
	);
});
