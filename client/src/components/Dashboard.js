import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import { IoTicketOutline } from 'react-icons/io5';
import Provinces from './Provinces';
import Lotteries from './Lotteries';

function Dashboard({ setCurrentId, province }) {
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
    };
    return (
        <div className="flex z-0">
            {/* sidebar */}
            <aside className="w-64 h-90v bg-gray shadow-md w-fulll hidden sm:block">
                <div className="flex flex-col justify-between h-full pl-6 pt-4 pb-4 bg-blue-600">
                    <div className="text-md">
                        <Link to="provinces">
                            <div className="bg-blue-800 text-white p-4 rounded-l-3xl mt-6 cursor-pointer hover:bg-white hover:text-blue-800 flex items-center">
                                <ImLocation className="mr-2" />
                                <p>Manage Provinces</p>
                            </div>
                        </Link>
                        <Link to="lotteries">
                            <div className="bg-blue-800 text-white p-4 rounded-l-3xl mt-6 cursor-pointer hover:bg-white hover:text-blue-800 flex items-center">
                                <IoTicketOutline className="mr-2" />
                                <p>Manage Lotteries</p>
                            </div>
                        </Link>
                        {/* <div className="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                            <span>Reports</span>
                            <span className="w-4 h-4 bg-blue-600 rounded-full text-white text-center font-normal text-xs">
                                5
                            </span>
                        </div> */}
                    </div>

                    <Link to="/login">
                        <div className="flex p-3 text-white bg-red-500 hover:bg-red-600 rounded-l-3xl cursor-pointer text-center text-md">
                            <button
                                className="inline-flex items-center"
                                onClick={(e) => handleLogout(e)}
                            >
                                <FiLogOut className="w-4 h-4 mr-2" />
                                <span className="font-semibold">Logout</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </aside>

            {province ? (
                <Provinces setCurrentId={setCurrentId} />
            ) : (
                <Lotteries setCurrentId={setCurrentId} />
            )}
        </div>
    );
}

export default Dashboard;
