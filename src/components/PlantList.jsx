import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ filteredPlants }) {
	return (
		<ul className="cards">
			{filteredPlants.map((plant) => (
				<PlantCard key={plant.id} plant={plant} />
			))}
		</ul>
	);
}

export default PlantList;
