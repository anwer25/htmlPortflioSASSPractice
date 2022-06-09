import React from "react";

/**
 * @description Intro section component
 * @author anwer nouri
 * @props null
 * @returns JSX.Element
 */

const Contact: React.FC = (): JSX.Element => (
	<div className="section-plum">
		<section id="contact">
			<h3>Contact Me</h3>
			<p>
				I&apos;m always interested in hearing about new projects
				opportunities.
			</p>
			{/* bead line for Security in real production project */}
			<a href="mailto:anwern29@outlook.fr">Email Me</a>
		</section>
	</div>
);

export default Contact;
