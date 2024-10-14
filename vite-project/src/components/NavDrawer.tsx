import { NavLink } from "react-router-dom";

type NavDrawerProps = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
};

const NavDrawer = (props: NavDrawerProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-7 font-museo-moderno text-cream font-black text-2xl fixed top-0 left-0 w-80 h-full bg-dark-brown transform ${
        props.isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div>
        <h1 className="mt-10 text-3xl ">ThomasHaene.com</h1>
        <hr className="" />
      </div>
      <NavLink
        to="/"
        onClick={props.toggleDrawer}
        className={({ isActive }) =>
          ` ${isActive ? "text-custom-orange " : "border-std-brown"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={props.toggleDrawer}
        className={({ isActive }) =>
          ` ${isActive ? "text-custom-orange " : "border-std-brown"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/experience"
        onClick={props.toggleDrawer}
        className={({ isActive }) =>
          ` ${isActive ? "text-custom-orange " : "border-std-brown"}`
        }
      >
        Experience
      </NavLink>

      {/* <NavLink to="/blog" onClick={props.toggleDrawer}>
        Blog
      </NavLink> */}
    </div>
  );
};

export default NavDrawer;
