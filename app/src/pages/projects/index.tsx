import React from "react";
import { Navbar, Footer, Project } from "../../components";

/**
 * @description Projects home component
 * @author anwer nouri
 * @props null
 * @returns JSX.Element
 */

const Projects: React.FC = (): JSX.Element => (
	<>
		<Navbar />
		<Project />
		<Footer />
	</>
);

export default Projects;
