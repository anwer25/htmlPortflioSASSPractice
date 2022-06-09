import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Projects} from '../index'

const Routess: React.FC = (): JSX.Element => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />}/>
		</Routes>
	</Router>
);

export default Routess;
