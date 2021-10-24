import React from 'react'
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';

function Login() {
    return (
        <div className="w-screen">
            <div className="bg-blue-500 shadow-lg rounded-2xl p-6 w-96 text-white mx-auto mt-5 bg-opacity-80 backdrop-filter backdrop-blur-sm">
                <h1 className="text-center font-bold text-3xl">Sign In</h1>
                <p className="text-center mb-2">
                    Sign in to access your account
                </p>
                <form action="">
                    {/* username */}
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-grey-darker font-bold text-lg mb-2"
                        >
                            Username:
                        </label>
                        <div className="flex items-center bg-gray-100 py-2 px-3 rounded">
                            <FiUser className="w-6 h-6 mr-3 text-gray-400" />
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                className="bg-transparent outline-none text-black w-full"
                            />
                        </div>
                    </div>

                    {/* password */}
                    <div className="mb-4 ">
                        <label
                            htmlFor="password"
                            className="text-grey-darker text-lg font-bold mb-2 block"
                        >
                            Password:
                        </label>
                        <div className="flex items-center bg-gray-100 py-2 px-3 rounded">
                            <RiLockPasswordFill className="w-6 h-6 mr-3 text-gray-400" />
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                className="bg-transparent outline-none text-black w-full"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="mb-2">
                        <button className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-md w-full">
                            <p className="text-lg font-semibold">Sign In</p>
                        </button>
                    </div>
                    <p className="text-center text-2xl mb-2">-----or-----</p>
                    <div className="mb-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-md w-full">
                            <p className="text-lg font-semibold">Sign Up</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login
