import { Link } from '@remix-run/react';
import { Menu } from 'lucide-react';


type NavBarProps = {
  toggleDrawer:()=> void,
}


export default function NavBar(props:NavBarProps) {
  
  return (
    <nav className="flex justify-between items-center bg-std-brown h-[111px] border-b-2 border-b-white">

      <h2 className="font-museo-moderno text-[44px] text-cream font-black ml-12"> 
        <Link to='/'>Thomas Haene</Link>
      </h2>
    
      <div className="hidden lg:flex lg:gap-8 xl:gap-28 justify-between font-museo-moderno text-[25px] text-cream font-black mr-14">
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience/Projects</Link>
        <Link to="/blog">Blog</Link>
      </div>
  
      <div className="lg:hidden cursor-pointer bg-dark-brown p-2 mr-4">
        <button onClick={props.toggleDrawer}><Menu size={44} color="#ffffff"/></button>
      </div>
    </nav>
  );
}
