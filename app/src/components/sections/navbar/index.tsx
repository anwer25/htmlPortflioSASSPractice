import React from "react";

/**
 * @description NavBar section component
 * @author anwer nouri
 * @props null
 * @returns JSX.Element
 */

const NavBar: React.FC = (): JSX.Element => (
	<nav>
		<ul>
			<li>
				<a href="/">
					<h1>anwer nouri</h1>
				</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="#about">About</a>
			</li>
			<li>
				<a href="#contact">Contact</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/anwer-nouri-7a3714164/">
					LinkedIn
				</a>
			</li>
			<li>
				<a href="https://github.com/anwer25">GitHub</a>
			</li>
			<li>
				<a className="button" href="http://">
					Resume
				</a>
			</li>
		</ul>
	</nav>
);

export default NavBar;
