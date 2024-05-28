import { Link } from '@remix-run/react';
import { Menu } from 'lucide-react';

export default function NavBar() {
  


  return (
    <nav className="flex justify-between items-center bg-std-brown h-[111px] border-b-2 border-b-white">

      <h2 className="font-museo-moderno text-[48px] text-cream font-black ml-12"> 
        <Link to='/'>Thomas Haene</Link>
      </h2>
      
     
      <div className="hidden lg:flex lg:gap-8 xl:gap-32 justify-between font-museo-moderno text-[25px] text-cream font-black mr-14">
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience/Projects</Link>
        <Link to="/blog">Blog</Link>
      </div>

  
      <div className="lg:hidden cursor-pointer bg-dark-brown p-3 mr-4">
        <Menu size={48} color="#ffffff"/>
      </div>
    </nav>
  );
}
