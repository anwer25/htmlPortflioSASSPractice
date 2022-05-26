import React from "react";

/**
 * @description Intro section component
 * @author anwer nouri
 * @props null
 * @returns JSX.Element
 */

const Intro: React.FC = (): JSX.Element => (
	<section id="intro">
		<p className="name">
			Hi, my name is <span>anwer nouri.</span>
		</p>
		<h2>I create the front end of websites</h2>
		<h1>I&apos;m a full stack developer</h1>
		<p>specializing in React, SASS, Rest Api, GraphQl</p>
		<p> Currently, I&apos;m working as A freelancer</p>
	</section>
);

export default Intro;
