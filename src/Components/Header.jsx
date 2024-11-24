import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">

                <Link to={'/'} className="text-2xl text-black font-bold">MyWebsite</Link>


                <nav className="hidden md:flex space-x-6">
                    <Link to={'/'} className="text-black">
                        Home
                    </Link>
                    <Link to={'/about'} className="text-black">
                        About
                    </Link>
                    <Link to={'/services'} className="text-black">
                        Services
                    </Link>
                    <Link to={'/login'} className="text-black">
                        Login
                    </Link>

                </nav>


            </div>
        </header>
    );
};

export default Header;
