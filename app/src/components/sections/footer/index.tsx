import React from "react";

/**
 * @description Footer section component
 * @author anwer nouri
 * @props null
 * @returns JSX.Element
 */

const Footer: React.FC = (): JSX.Element => (
<footer >
	<h2>anwer nouri &middot; full stack js</h2>
	<ul>
		<li><a href="linkedIn">LinkedIn</a></li>
		<li><a href="GitHub">GitHub</a></li>
		<li><a href="mailto:anwern29@outlook.fr">Email</a></li>
	</ul>
	<p><small>&copy; 2022 anwer nouri. All rights reserved</small></p>
</footer>
);

export default Footer;
