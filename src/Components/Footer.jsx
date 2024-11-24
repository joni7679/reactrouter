import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">

                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-gray-400">
                        We are a passionate team dedicated to building responsive, user-friendly websites to make your ideas a reality.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-gray-200 transition duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-gray-200 transition duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-gray-200 transition duration-300"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-gray-200 transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-400">Email: joni@example.com</p>
                    <p className="text-gray-400">Phone: +9123 456 7890</p>
                    <p className="text-gray-400">Address: Gangarampur, Dakshin Dinajpur, West Bengal</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-gray-400">
                    &copy;  MyWebsite. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
