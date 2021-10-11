import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Home() {
    return (
        <div className="sticky">
            <div className="space-y-2 mx-auto w-80w items-center mt-5 flex justify-between">
                {/* search bar */}
                <div className="w-40w ml-6">
                    <div className="ml-6 mb-2 font-semibold text-xl text-white">
                        <p>Example Input Search: XSKT AG 05/01/2021</p>
                    </div>
                    <div>
                        <div className="flex items-center bg-white shadow-md py-4 px-6 rounded-full">
                            <input
                                type="text"
                                placeholder="Search your lottery here"
                                className="bg-transparent outline-none text-black w-full"
                            />
                            <AiOutlineSearch className="w-6 h-6 mr-3 text-gray-400" />
                        </div>
                    </div>
                </div>
                {/* result */}
                <div className="mr-6 flex">
                    <div className="ml-6 font-semibold px-6 text-white">
                        <p>Province: An Giang</p>
                        <p>Date: 05/10/2021</p>
                    </div>
                    <table className="lottery shadow-md">
                        <thead className="bg-blue-400 text-white">
                            <tr>
                                <th className="py-4 px-5">Prize</th>
                                <th className="py-4 px-5">Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GDB</td>
                                <td className="text-red-500">73967</td>
                            </tr>
                            <tr>
                                <td>G1</td>
                                <td>77123</td>
                            </tr>
                            <tr>
                                <td>G2</td>
                                <td>
                                    <div className="flex justify-center">
                                        <p className="mx-2">05811</p>
                                        <p className="mx-2">34359</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>G3</td>
                                <td>
                                    <div className="grid grid-cols-3">
                                        <p className="mx-2">06377</p>
                                        <p className="mx-2">06377</p>
                                        <p className="mx-2">06377</p>
                                        <p className="mx-2">06377</p>
                                        <p className="mx-2">06377</p>
                                        <p className="mx-2">06377</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>G4</td>
                                <td>
                                    <div className="flex justify-center">
                                        <p className="mx-2">4377</p>
                                        <p className="mx-2">1609</p>
                                        <p className="mx-2">1609</p>
                                        <p className="mx-2">1609</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>G5</td>
                                <td>
                                    <div className="grid grid-cols-3">
                                        <p className="mx-2">5445</p>
                                        <p className="mx-2">5445</p>
                                        <p className="mx-2">5445</p>
                                        <p className="mx-2">7370</p>
                                        <p className="mx-2">7370</p>
                                        <p className="mx-2">9796</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>G6</td>
                                <td>
                                    <div className="flex justify-center">
                                        <p className="mx-2">493</p>
                                        <p className="mx-2">161</p>
                                        <p className="mx-2">849</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>G7</td>
                                <td>
                                    <div className="flex justify-center">
                                        <p className="mx-2">87</p>
                                        <p className="mx-2">98</p>
                                        <p className="mx-2">07</p>
                                        <p className="mx-2">56</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
