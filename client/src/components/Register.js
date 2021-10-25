import React, { useState, useEffect } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../controllers/users';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

function Register() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
    });
    const dispatch = useDispatch();
    const alert = useAlert();
    const { message } = useSelector((state) => state.users);
    const history = useHistory();

    useEffect(() => {
        if (message && userData.username !== '' && userData.password !== '') {
            alert.info(message);
        }
        if (message === 'Register Successfully') {
            setTimeout(() => {
                history.push('/login');
            }, 1000);
        }
    }, [message, alert, history, userData.username, userData.password]);

    const handleRegister = (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = userData;
        if (!username || !password || !confirmPassword)
            alert.error('Please input fields');
        else if (password !== confirmPassword)
            alert.error('Password not match');
        else {
            dispatch(registerUser(userData));
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        history.push('/login');
    };

    return (
        <div className="w-screen">
            <div className="bg-blue-500 shadow-lg rounded-2xl p-6 w-96 text-white mx-auto mt-5 bg-opacity-80 backdrop-filter backdrop-blur-sm">
                <h1 className="text-center font-bold text-3xl">Sign Up</h1>
                <p className="text-center mb-2">Create your new account</p>
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
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        username: e.target.value,
                                        name: e.target.value,
                                    })
                                }
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
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="bg-transparent outline-none text-black w-full"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="repassword"
                            className="block text-grey-darker text-lg font-bold mb-2"
                        >
                            Re-enter Password:
                        </label>
                        <div className="flex items-center bg-gray-100 py-2 px-3 rounded">
                            <RiLockPasswordFill className="w-6 h-6 mr-3 text-gray-400" />
                            <input
                                type="password"
                                id="repassword"
                                placeholder="Re-enter Password"
                                className="bg-transparent outline-none text-black w-full"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        confirmPassword: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <br />
                    <div className="mb-2">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-md w-full"
                            onClick={(e) => handleRegister(e)}
                        >
                            <p className="text-lg font-semibold">Sign Up</p>
                        </button>
                    </div>
                    <p className="text-center text-2xl mb-2">-----or-----</p>
                    <div className="mb-4">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-md w-full"
                            onClick={(e) => handleLogin(e)}
                        >
                            <p className="text-lg font-semibold">Sign In</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
