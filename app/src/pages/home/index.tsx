import React from "react";
import { Navbar, Intro, Contact, Footer } from "../../components";

const Home: React.FC = (): JSX.Element => (
	<>
		<Navbar />
		<Intro />
		<Contact />
		<Footer />
	</>
);

export default Home;
