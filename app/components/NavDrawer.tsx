import { Link } from "@remix-run/react";

type NavDrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const NavDrawer = (props: NavDrawerProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-7 font-museo-moderno text-[27px] text-cream font-black fixed top-0 left-0 w-96 h-full bg-dark-brown transform ${
        props.isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <Link to="/" className="text-[40px] mt-10" onClick={props.toggleDrawer}>
        Thomas Haene
      </Link>
      <Link to="/about" onClick={props.toggleDrawer}>
        About
      </Link>
      <Link to="/skills" onClick={props.toggleDrawer}>
        Skills
      </Link>
      <Link to="/experience" onClick={props.toggleDrawer}>
        Experience/Projects
      </Link>
      <Link to="/blog" onClick={props.toggleDrawer}>
        Blog
      </Link>
    </div>
  );
};

export default NavDrawer;
