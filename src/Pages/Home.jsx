import React from "react";

const Home = () => {
    return (
        <section
            id="home"
            className="bg-gray-100 py-16 md:py-24 flex items-center"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Build Amazing Websites <br /> With Ease
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Learn modern web development technologies and create responsive, interactive, and beautiful user interfaces.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <a
                            href="#about"
                            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-gray-500 transition duration-300"
                        >
                            Get Started
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-blue-600 transition duration-300 hover:text-white"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2024/02/22/03/05/information-8589031_1280.png"
                        alt="Web Development"
                        className="w-full max-w-md md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
