import { Link } from "@remix-run/react";
import { Menu } from "lucide-react";
import { Fade } from "react-awesome-reveal";

type NavBarProps = {
  toggleDrawer: () => void;
};

export default function NavBar(props: NavBarProps) {
  return (
    <nav className="flex justify-between items-center bg-std-brown h-[111px] border-b-2 border-b-white">
      <h2 className="font-museo-moderno text-[44px] text-cream font-black ml-12">
        <Fade triggerOnce>
          <Link to="/" className="drop-shadow-2xl">
            Thomas Haene
          </Link>
        </Fade>
      </h2>

      <div className="hidden lg:flex lg:gap-8 xl:gap-28 justify-between font-museo-moderno text-[25px] text-cream font-black mr-14">
        <Fade cascade damping={0.2} triggerOnce>
          <Link to="/about" className="drop-shadow-xl">
            About
          </Link>
          <Link to="/skills" className="drop-shadow-xl">
            Skills
          </Link>
          <Link to="/experience" className="drop-shadow-xl">
            Experience/Projects
          </Link>
          <Link to="/blog" className="drop-shadow-xl">
            Blog
          </Link>
        </Fade>
      </div>

      <div className="lg:hidden cursor-pointer bg-dark-brown p-2 mr-4">
        <button onClick={props.toggleDrawer}>
          <Menu size={44} color="#ffffff" />
        </button>
      </div>
    </nav>
  );
}
