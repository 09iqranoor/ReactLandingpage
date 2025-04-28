import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from "../constants"; // Fixed typo: 'userState' to 'useState'

const Navbar = () => {

// hm yahan toggle lagaenge mobile screen pr click krne se open hoge navbar or close hoge is k lye hm ne img lgae hai neeche 3 lines wale ..
  const [toggle, setToggle] = useState(false) ;       
    
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
  
      <img src={logo} alt="Logo" className='w-[124px] h-[32px] justify-start' /> {/* Logo */}
      {/* Add other left-aligned elements here if needed */}
  
    <ul className='list-none sm:flex hidden justify-end items-center flex-1'> {/* Right-aligned elements */}
      {navLinks.map(
        (nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        )
      )}
    </ul>
{/* for mobile screen */}

<div className='sm:hidden flex flex-1 justify-end items-center '>
   
   <img src={toggle ? close : menu}  alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer '  onClick={()=> setToggle((prev) => !prev)}/>


   <div className={`sm:hidden ${toggle ? 'flex' : 'hidden'} p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

   <ul className='list-none flex  flex-col justify-end items-center flex-1'> {/* Right-aligned elements */}
      {navLinks.map(
        (nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        )
      )}
    </ul>

</div>

   </div>
  </nav>
  
  );
}

export default Navbar;
