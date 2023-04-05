import React, { useState } from "react";
import data from "./data";
function App() {
	const [para, setPara] = useState([]);
	const [count, setCount] = useState(0);

	const handleSubmit = (eve) => {
		eve.preventDefault();
		// console.log(eve);
		if (count <= 0) {
			setPara([]);
		} else if (count <= data.length - 1) {
			setPara(data.slice(0, count));
		} else {
			setPara([
				`You Can Generate atmost ${data.length - 1} number of dummy Paragraphs`,
			]);
		}
	};

	return (
		<section className="section-center">
			<h3>Dummy Text Generator</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">Paragraphs</label>
				<input
					type="number"
					placeholder="0"
					name="amount"
					id="amount"
					onChange={(eve) => setCount(eve.target.value)}
					value={count}
				/>
				<button className="btn" type="submit">
					Generate
				</button>
			</form>
			<article className="lorem">
				{para.map((each, eachIndex) => {
					return <p>{each}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
