import React from "react";

/**
 * @description Project section component
 * @author anwer nouri
 * @props null
 * @returns JSX.Element
 */

const Project: React.FC = (): JSX.Element => (
	<div className="section-dkblue">
		<section id="projects">
			<h2>projects i&#39;m proud of</h2>
			<article>
				<h4>Latest Project</h4>
				<h3>React & sass practice portfolio</h3>
				<p className="blackbox">Description</p>
				<h4>Technologies used include:</h4>
				<ul>
					<li>React</li>
					<li>SASS</li>
					<li>SVG</li>
				</ul>
			</article>
		</section>
	</div>
);

export default Project;
