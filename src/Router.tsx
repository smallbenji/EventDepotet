import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TestPage } from "./Pages/TestPage/TestPage";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/test" element={<TestPage />} />
			</Routes>
		</BrowserRouter>
	);
};
