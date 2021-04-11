import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./AddItemForm.css";

function AddItemForm () {
	const INITIAL_STATE = {
		type: "",
		id: "",
		name: "",
		description: "",
		recipe: "",
		serve: ""
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const history = useHistory();

	function handleChange (e) {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	}

	function handleSubmit (e) {
		e.preventDefault();
		axios.post(`http://localhost:5000/${formData.type}`, { ...formData });
		setFormData(INITIAL_STATE);
		history.push("/");
	}

	return (
		<div className="Form">
			<Form className="Form-body" onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor="type">Item to add</Label>
					<Input
						className="Form-input"
						value={formData.type}
						type="select"
						name="type"
						id="type"
						onChange={handleChange}>
						<option />
						<option>snacks</option>
						<option>drinks</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="id">Item ID</Label>
					<Input
						className="Form-input"
						name="id"
						id="id"
						value={formData.id}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="name">Name</Label>
					<Input
						className="Form-input"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="description">Description</Label>
					<Input
						className="Form-input"
						name="description"
						id="description"
						value={formData.description}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="recipe">Recipe</Label>
					<Input
						className="Form-input"
						name="recipe"
						id="recipe"
						value={formData.recipe}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="serve">Serve</Label>
					<Input
						className="Form-input"
						name="serve"
						id="serve"
						value={formData.serve}
						onChange={handleChange}
					/>
				</FormGroup>
				<Button className="Form-btn">Add item</Button>

				<Link to="/" className="btn btn-secondary Form-btn">
					Go Back
				</Link>
			</Form>
		</div>
	);
}

export default AddItemForm;
