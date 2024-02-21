import React from "react";
import style from "./index.module.scss";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";

import linkedIn from "../../assets/linkedin.svg";

const Footer = () => {
	const mid = [
		{
			name: "Leadership coaching",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/",
		},
		{
			name: "Team coaching",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/",
		},
		{
			name: "Bespoke Training",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/",
		},
		{
			name: "Approach",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/approach",
		},
		{
			name: "About",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/about",
		},
		{
			name: "Resources",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/resources",
		},
	];
	const right = [
		{
			name: "Contact",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/contact",
		},
		{
			name: "Terms Of Use",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io",
		},
		{
			name: "Privacy Policy",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io",
		},
	];
	const socials = [
		{ icon: twitter, link: "" },
		{ icon: insta, link: "" },
		{ icon: linkedIn, link: "" },
	];
	return (
		<div className={style.contianer}>
			<div className={`${style.imgContainer} hideOn1200`}>
				<img src={logo} alt="logo" />
				<span>© 2024 The Growing Seed. All rights reserved</span>
			</div>
			<div className={style.second}>
				<div className={style.textLinks}>
					{mid.map((item) => (
						<a href={item.link} key={item.link} target="_self">
							{item.name}{" "}
						</a>
					))}
				</div>
				<div className={`${style.columnIcons} `}>
					{socials.map((item) => (
						<img src={item.icon} alt="icon" />
					))}
				</div>
			</div>
			<div className={style.midRight}>
				<div>
					{right.map((item) => (
						<a href={item.link} key={item.link} target="_self">
							{item.name}{" "}
						</a>
					))}
				</div>
			</div>
			<div className={`${style.imgContainerMob} displayOn1200`}>
				<img src={logo} alt="logo" />
				<span>© 2024 The Growing Seed. All rights reserved</span>
			</div>
			<div className={`${style.right} `}>
				{socials.map((item) => (
					<img src={item.icon} alt="icon" />
				))}
			</div>
		</div>
	);
};

export default Footer;
