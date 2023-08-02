import { db } from "../../firebase";

export const TestPage = () => {
	console.log(db.collection("Products").count());

	return (
		<div>
			<h1>Test Page</h1>
		</div>
	);
};

export default { TestPage };
