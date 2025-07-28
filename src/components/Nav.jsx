import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

function Nav() {
   return (
      <header className="absolute z-10 w-full py-8 padding-x">
         <nav className="flex items-center justify-between max-container">
            <a href="/">
               <img 
               src={headerLogo} 
               alt="Logo"
               width={130}
               height={29} />
               </a>
               <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
                  {navLinks.map((link, index) => (
                     <li key={link.label}>
                        <a 
                           href={link.href} 
                           className="text-lg leading-normal font-montserrat text-slate-gray"
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>
               <div>
                  <img 
                  className='hidden max-lg:block'
                  src={hamburger} 
                  alt="haburger"
                  width={25}
                  height={25} />
               </div>
         </nav>
      </header>
   )
}

export default Nav