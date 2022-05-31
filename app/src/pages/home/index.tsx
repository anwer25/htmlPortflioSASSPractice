import React from "react";
import { Navbar,Intro, Contact } from "../../components";

const Home: React.FC = (): JSX.Element => (
	<>
		<Navbar />
		<Intro />
		<Contact />
	</>
);

export default Home;
