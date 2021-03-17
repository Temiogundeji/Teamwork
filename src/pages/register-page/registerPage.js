import React from 'react';
import './registerPage.css';

const RegisterPage = (props) => {
    return (
        <>
            <form onSubmit = {() => {}}>
                <section className="text-red-500 heading-font">
                    <div className="container px-8 pt-10 pb-24 mx-auto lg:px-4">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-2 text-center text-xl">Teamwork</span>
                        </a>
                        <div
                            className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                            <div className="relative ">
                                <input type="text" id="fname" name="fname" placeholder="First Name"
                                    className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            </div>
                            <div className="relative ">
                                <input type="text" id="fname" name="fname" placeholder="Last Name"
                                    className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            </div>
                            <div className="relative ">
                                <input type="email" id="email" name="email" placeholder="Email"
                                    className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            </div>
                            <div className="relative ">
                                <input type="password" id="password" name="password" placeholder="Password"
                                    className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            </div>
                            <div class="relative">
                                <select
                                    class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                                    <option disabled>Select Department</option>
                                    <option value="1">Engineering</option>
                                    <option value="2">Design</option>
                                    <option value="3">DevOps</option>
                                    <option value="4">Operations</option>
                                </select>
                            </div>
                            <div className="relative mt-4">
                                <input type="file" id="file" name="image" placeholder="Upload Image"
                                    className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            </div>
                            <div className="relative mb-4">
                                <textarea placeholder="Address" className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></textarea>
                            </div>
                            <button
                                className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-red hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Register</button>
                        </div>
                    </div>
                </section>
         </form>   
        </>
    );
}

export default RegisterPage;