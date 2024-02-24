import { useState } from "react";
import logo from "../../assets/logo.svg";
import burger from "../../assets/menu.png";
import style from "./index.module.scss";
const Navbar = () => {
	const [navbarActive, setNavbarActive] = useState(false);
	const navBarRoutes = [
		{
			name: "Services",
			link: "https://www.thegrowingseed.org/leadership-and-executive-coaching",
		},
		{
			name: "Approach",
			link: "https://www.thegrowingseed.org/approach",
		},
		{
			name: "About",
			link: "https://www.thegrowingseed.org/about",
		},
		{
			name: "Resources",
			link: "https://www.thegrowingseed.org/resources",
		},
	];
	console.log(navbarActive);
	const handleClick = (e) => {
		setNavbarActive((prev) => !prev);
	};
	const handleNavigate = (url: string) => {
		window.location.href = url;
	};
	return (
		<>
			<div className={style.container}>
				<img
					src={logo}
					alt="logo"
					onClick={() => handleNavigate("https://www.thegrowingseed.org")}
				/>
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
					<a href={item.link} target="_self" key={item.name}>
						{item.name}
					</a>
				))}
			</div>
		</>
	);
};

export default Navbar;
