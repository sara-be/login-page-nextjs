"use client";
// import { ion-icon } from 'ionicons';
import { FaGoogle, FaFacebook, FaEnvelope, FaGit, FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';

const LoginComponent: React.FC = () => {
    const [showOtherPlatforms, setShowOtherPlatforms] = useState(false);

    const handleClick = () => {
        setShowOtherPlatforms(!showOtherPlatforms);
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-4xl font-bold text-center text-gray-800 my-4">Log in</h1>
                {showOtherPlatforms ? (
                    <div >
                        <button className="w-full py-2 px-4 bg-gray-300 rounded hover:bg-gray-400" onClick={handleClick}><FaEnvelope className="text-white-600 text-xl inline " /> Log in using Email</button>
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500">Or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <button className="w-full mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"><FaGoogle className="text-white-600 text-xl inline " /> Login with Google</button>
                        <button className="w-full mb-4 py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-900"><FaGithub className="text-white-600 text-xl inline " /> Login with Github</button>
                        <div className="mt-4 text-gray-700">
                            Need to create an account? <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Sign up</a>
                        </div>


                    </div>
                ) : (
                    <div >
                        <form action="">
                            <div className="mb-4">
                                <label className="block text-gray-700">Email:</label>
                                <input type="email" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password:</label>
                                <input type="password" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <button className="w-full mb-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700" type='submit'>Login</button>
                        </form>
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500">Or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <button className="w-full py-2 px-4 bg-gray-300 rounded hover:bg-gray-400" onClick={handleClick}>Use other platforms</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginComponent;
