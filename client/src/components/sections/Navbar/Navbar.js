import React, { useState } from 'react';

const Navbar = ({ isLoggedIn }) => {
    const [displayNav, setDisplayNav] = useState(true);

    const handleNavToggle = () => {
        setDisplayNav(!displayNav);
    }

    const resNav =  isLoggedIn ? (
        <ul className="flex-column p-12 md:flex sm:hidden">
            <li><a className="" href="#">Logo</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        ) : (
            <ul className="flex-column md:flex sm:hidden">
            <li><a className="" href="#">Logo</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gifs</a></li>
            <li><a href="#">Articles</a></li>
        </ul>
        )
   
    return (
        <div className="pt-5 border-blue-600 h-2">
            <button onClick={() => handleNavToggle()} className="block rounded-full bg-purple-500 font-bold text-white p-4 md:hidden sm:hidden">Toggle</button>
            {displayNav ? resNav : null}
        </div> 
    ); 
}

export default Navbar;
