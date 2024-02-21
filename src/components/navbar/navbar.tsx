import { useState } from "react";
import logo from "../../assets/logo.svg";
import burger from "../../assets/menu.png";
import style from "./index.module.scss";
const Navbar = () => {
	const [navbarActive, setNavbarActive] = useState(false);
	const navBarRoutes = [
		{
			name: "Services",
			link: "https://the-growing-seed-238c266ba775928176a1ac.webflow.io/leadership-and-executive-coaching",
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
	console.log(navbarActive);
	const handleClick = (e) => {
		setNavbarActive((prev) => !prev);
	};
	return (
		<>
			<div className={style.container}>
				<img src={logo} alt="logo" />
				<div className={style.midSection}>
					{navBarRoutes.map((item) => (
						<a href={item.link} key={item.name}>
							{item.name}
						</a>
					))}
				</div>
				<a
					className={`button-primary ${style.connect}`}
					href="https://calendly.com/thegrowingseed/30min"
					target="_blank"
					rel="noreferrer"
				>
					let's connect
				</a>
				<div className={style.burgerMenu} onClick={handleClick}>
					<img src={burger} alt={burger} />
				</div>
			</div>
			<div
				className={`${style.mobNav} ${
					navbarActive ? style.activeNav : style.disabledNav
				}`}
			>
				{navBarRoutes.map((item) => (
					<span>{item.name}</span>
				))}
			</div>
		</>
	);
};

export default Navbar;
