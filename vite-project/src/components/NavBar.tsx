import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import the X (close) icon

type NavBarProps = {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
};

function NavBar(props: NavBarProps) {
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="lg:hidden bg-std-brown h-24 flex justify-between py-3 pl-9 text-cream items-center border-b-2 border-white sticky top-0 left-0 right-0 z-50">
        <h1 className="font-bold text-3xl">ThomasHaene.com</h1>
        <div className="lg:hidden cursor-pointer bg-std-brown p-2 mr-4">
          <button
            onClick={props.toggleDrawer}
            className="transition-transform duration-1000 ease-in-out"
          >
            {props.isDrawerOpen ? (
              <X size={44} color="#ffffff" />
            ) : (
              <Menu size={44} color="#ffffff" />
            )}
          </button>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="bg-std-brown h-24 hidden lg:flex justify-between text-cream font-nunito items-center px-10 border-b-2 border-white sticky top-0 left-0 right-0 z-50">
        <h1 className="font-bold text-4xl">ThomasHaene.com</h1>
        <div className="flex gap-16 text-xl font-bold pr-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `border-b-2 ${
                isActive
                  ? "text-custom-orange border-custom-orange"
                  : "border-std-brown hover:text-custom-orange hover:border-custom-orange"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `border-b-2 ${
                isActive
                  ? "text-custom-orange border-custom-orange"
                  : "border-std-brown hover:text-custom-orange hover:border-custom-orange"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `border-b-2 ${
                isActive
                  ? "text-custom-orange border-custom-orange"
                  : "border-std-brown hover:text-custom-orange hover:border-custom-orange"
              }`
            }
          >
            Experience
          </NavLink>

          {/* <a
            href="https://dik.gdr.mybluehost.me/"
            target="_blank"
            className="border-b-2 border-std-brown hover:text-custom-orange hover:border-custom-orange"
          >
            Blog
          </a> */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
