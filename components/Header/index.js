import { useState } from "react";
import Link from "next/link";
import Background from "./background";
import Tooltip from "../Tooltip";
import Logo from "../Logo";
import { title } from "../../data/site.yaml";
import styles from "./index.module.scss";

// header component to show at top of every page
const Header = () => {
  // It used to be the case that the header was larger
  // for the home page. If we decide to stick with a
  // universally small one, this option should probably
  // just be removed.
  const big = false;

  return (
    <header className={styles.header} data-big={big}>
      <Background />
      <Title big={big} />
      <Nav />
    </header>
  );
};

export default Header;

// centered site title with logo and text
const Title = ({ big }) => (
  (<Link href="/" className={styles.title}>

    <Logo big={big} />
    <Text />

  </Link>)
);

// site title text
const Text = () => (
  <span className={styles.text}>
    {title.split("").map((char, index) => (
      <span key={index}>{char}</span>
    ))}
  </span>
);

// navigation bar with links
const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} data-open={open}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      <NavLink
        link="/#lessons"
        text="Lessons"
        tooltip="Various maths topics, in video and text form"
      />
      <NavLink
        link="https://some.3b1b.co"
        text="SoME"
        tooltip="The Summer of Math Exposition"
      />
      <NavLink link="/blog" text="Blog" tooltip="Writing about math and more" />
      <NavLink link="/extras" text="Extras" tooltip="Work elsewhere on the web" />

      <div className={styles.break} />

      <NavLink
        link="https://store.dftba.com/collections/3blue1brown"
        text="Store"
        tooltip="Notebooks, shirts, plushies, and more"
      />
      <NavLink
        link="/faq"
        text="FAQ"
        tooltip="Have a question?"
      />
      <NavLink
        link="/contact"
        text="Contact"
        tooltip="Email"
      />
      <NavLink
        link="/about"
        text="About"
        tooltip="What and who is 3blue1brown"
      />
    </nav>
  );
};

// nav bar link
const NavLink = ({ link, text, icon, tooltip }) => (
  <Link href={link} passHref legacyBehavior>
    <Tooltip content={tooltip}>
      <a className={styles.link}>
        {text}
        {icon && <i className={icon} />}
      </a>
    </Tooltip>
  </Link>
);
