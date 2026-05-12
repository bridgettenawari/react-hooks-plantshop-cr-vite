import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState("");

	function handleAddPlant(e) {
		e.preventDefault();
		console.log(name, image, price);
		if (name.trim() === "" || image.trim() === "") return;
		const newPlant = {
			name,
			image,
			price,
		};
		fetch("http://localhost:6001/plants", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPlant),
		})
			.then((response) => response.json())
			.then((createdPlant) => onAddPlant(createdPlant))
			.catch((error) => console.error(error));
		setName("");
		setImage("");
		setPrice("");
	}

	return (
		<div className="new-plant-form">
			<h2>New Plant</h2>
			<form onSubmit={handleAddPlant}>
				<input
					type="text"
					value={name}
					placeholder="Plant name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					value={image}
					placeholder="Image URL"
					onChange={(e) => setImage(e.target.value)}
				/>
				<input
					type="number"
					value={price}
					step="0.01"
					placeholder="Price"
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button type="submit">Add Plant</button>
			</form>
		</div>
	);
}

export default NewPlantForm;
