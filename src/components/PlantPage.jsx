import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
	const [plants, setPlant] = useState([]);
	const [error, setError] = useState("");
	const [searchedPlants, setSearchedPlant] = useState("");
	function displayPlant() {
		fetch("http://localhost:6001/plants")
			.then((res) => {
				if (!res.ok) throw new Error("Data not fetched");
				return res.json();
			})
			.then((data) => {
				setPlant(data);
			})
			.catch((error) => setError(error.message));
	}
	useEffect(() => {
		displayPlant();
	}, []);
	function addPlant(newPlant) {
		setPlant([...plants, newPlant]);
	}
	const filteredPlants = plants.filter((plant) =>
		plant.name.toLowerCase().includes(searchedPlants.toLowerCase()),
	);
	return (
		<main>
			<NewPlantForm onAddPlant={addPlant} />
			<Search
				searchedPlants={searchedPlants}
				setSearchedPlant={setSearchedPlant}
			/>
			<PlantList filteredPlants={filteredPlants} />
			{error && <p>{error}</p>}
		</main>
	);
}

export default PlantPage;
