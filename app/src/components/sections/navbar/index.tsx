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
				<a href="/home">
					<h1>anwer nouri</h1>
				</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
			<li>
				<a href="#about">About</a>
			</li>
			<li>
				<a href="#contact">Contact</a>
			</li>
			<li>
				<a href="http://">
					LinkedIn
				</a>
			</li>
			<li>
				<a href="http://">
					GitHub
				</a>
			</li>
			<li>
				<a className="button" href="http://">Resume</a>
			</li>
		</ul>
	</nav>
);

export default NavBar;
