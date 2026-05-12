import React, { useState } from "react";

function PlantCard({ plant }) {
	const [inStock ,setInStock] = useState(true)
	function toggleStock(){
		if(inStock === true){
			setInStock(false)
		}else if(inStock === false){
			setInStock(true)
		}
	}
	return (
		<li className="card" data-testid="plant-item">
			<img src={plant.image} alt={plant.name} />
			<h4>{plant.name}</h4>
			<p>Price: {plant.price}</p>
			{inStock === true ? (
				<button onClick={toggleStock}className="primary">In Stock</button>
			) : (
				<button onClick={toggleStock}>Out of Stock</button>
			)}
		</li>
	);
}

export default PlantCard;
