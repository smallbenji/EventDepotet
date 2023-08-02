import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<h1>Hello from Vite</h1>} />
		</Routes>
	</BrowserRouter>
);
