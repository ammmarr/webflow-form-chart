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
      link: "https://www.thegrowingseed.org/leadership-executive-and-career-coaching",
    },
    {
      name: "Team coaching",
      link: "https://www.thegrowingseed.org/team-effectiveness-coaching",
    },
    {
      name: "Bespoke Training",
      link: "https://www.thegrowingseed.org/bespoke-training",
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
  const right = [
    {
      name: "Contact",
      link: "https://www.thegrowingseed.org/contact",
    },
    {
      name: "Terms Of Use",
      link: "https://www.privacypolicies.com/live/a3d2b5ff-56a0-4097-978d-b8dd25b41a45",
    },
    {
      name: "Privacy Policy",
      link: "https://www.privacypolicies.com/live/a3d2b5ff-56a0-4097-978d-b8dd25b41a45",
    },
  ];
  const socials = [
    { icon: twitter, link: "" },
    { icon: insta, link: "" },
    { icon: linkedIn, link: "" },
  ];
  const handleNavigate = (url: string) => {
    window.location.href = url;
  };
  return (
    <div className={style.contianer}>
      <div className={`${style.imgContainer} hideOn1200`}>
        <img
          src={logo}
          alt="logo"
          onClick={() => handleNavigate("https://www.thegrowingseed.org")}
        />
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
          {socials.map((item, i) => (
            <img src={item.icon} alt="icon" key={i} />
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
        {socials.map((item, i) => (
          <img src={item.icon} alt="icon" key={i} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
