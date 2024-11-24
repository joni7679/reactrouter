import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Login() {
    return (
        <>
            <Header />
            <div className='login container mx-auto px-5 w-full h-screen'>
                <div className='shadow-lg w-[350px] rounded '>
                    <form action="" className='w-[80%] mx-auto border-e-red-400 p-3'>
                        <h1 className='text-center font-semibold capitalize text-2xl'>Login</h1>
                        <div className='input-filled mt-2'>
                            <label htmlFor="" className='block capitalize'>username</label>
                            <input type="text" name="" id="" className='p-3 py-2 rounded outline-none  border-[1px] border-gray-700 hover:border-blue-700 duration-150 focus:border-blue-500 w-full' />
                        </div>

                        <div className='input-filled mt-2'>
                            <label htmlFor="" className='block capitalize'>Phone Number</label>
                            <input type="text" name="" id="" className='p-3 py-2 rounded outline-none  border-[1px] border-gray-700 hover:border-blue-700 duration-150 focus:border-blue-500 w-full' />
                        </div>

                        <div className='input-filled mt-2'>
                            <label htmlFor="" className='block capitalize'>Email Id</label>
                            <input type="text" name="" id="" className='p-3 py-2 rounded outline-none  border-[1px] border-gray-700 hover:border-blue-700 duration-150 focus:border-blue-500 w-full' />
                        </div>
                       
                            <button className='capitalize w-full border-none bg-blue-600 text-white px-[25px] py-[10px] rounded mt-5'>submit</button>
                    




                    </form>
                </div>

            </div>

            <Footer />

        </>
    )
}
