import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function About() {
    return (
        <>
            <Header />
            <section
                id="about"
                className="bg-gray-100 py-16 md:py-24 flex items-center"
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
                    {/* Text Content */}
                    <div className="text-center md:text-left md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            About us
                        </h1>
                        <p className="mt-4 text-gray-600 text-lg">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quidem! Delectus, beatae. Accusamus omnis possimus tenetur autem. Itaque nemo at quis? Tempora quasi illo iure? Maxime eos recusandae nam consequuntur, molestias sit maiores beatae.
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start space-x-4">
                            <a
                                href="#about"
                                className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-gray-500 transition duration-300"
                            >
                                About
                            </a>

                        </div>
                    </div>

                    {/* Image */}
                    <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?t=st=1732378321~exp=1732381921~hmac=33037a51a2a39cc03d3dc32c6c4cc8f93ec20640d13ba967ed17be92c79b5be2&w=740"
                            alt="Web Development"
                            className="w-full max-w-md md:max-w-lg"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
