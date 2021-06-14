import React, { useState } from "react";

//include images into your bundle

//create your first component

export function Home() {
	const [selectedColor, setSelectedColor] = useState("");

	return (
		<>
			<div className="subBox"></div>
			<div className="box">
				<div
					onClick={() => setSelectedColor("light red")}
					className={
						"red" + (selectedColor === "light red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("light yellow")}
					className={
						"yellow" +
						(selectedColor === "light yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("light green")}
					className={
						"green" +
						(selectedColor === "light green" ? " glow" : "")
					}></div>
			</div>
		</>
	);
}
