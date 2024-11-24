import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { courses } from '../data'

export default function Services() {
    return (
        <>
            <Header />
            <div className="container mx-auto w-full  px-5">
                <div className='px-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5 gap-2 '>
                    {courses.map((elem, i) => {
                        return (
                            <div key={i} className='shadow w-[300px]  rounded overflow-hidden'>
                                <div className='img-container w-full h-[200px]'>
                                    <img src={elem.image} className='w-full h-full object-cover' alt="courseimg" />
                                </div>
                                <div className='px-5'>
                                    <h3 className='text-center text-xl font-semibold mt-5'>{elem.courseName}</h3>
                                    <div className='flex items-center justify-between'>
                                        <p>{elem.courseDuration}</p>

                                        <p>{elem.reaction}</p>
                                    </div>
                                    <div className='flex items-center justify-center px-5'>
                                        <button className='bg-blue-600 px-[25px] py-[10px]  text-white rounded capitalize mt-5 text-center mb-5 '>enroll now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>


            <Footer />
        </>
    )
}
