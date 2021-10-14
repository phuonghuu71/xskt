import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProvinces } from '../../controllers/provinces';

function CreateLottery({ createModal, setCreateModal }) {
    const dispatch = useDispatch();
    const { provinces } = useSelector((state) => state.provinces);
    const [provinceID, setProvinceID] = useState({
        _id: '',
    });
    const [prizeID, setPrizeID] = useState({
        _id: '',
    });
    const [luckyNumber, setLuckyNumber] = useState({
        luckyNumber: '',
    });

    useEffect(() => {
        dispatch(getProvinces(0));
    }, []);

    const prizes = [
        {
            _id: '615977f4f7dd2c5068dfcd49',
            name: 'GDB',
        },
        {
            _id: '6159784ff7dd2c5068dfcd4b',
            name: 'G1',
        },
        {
            _id: '61597856f7dd2c5068dfcd4d',
            name: 'G2',
        },
        {
            _id: '6159785bf7dd2c5068dfcd4f',
            name: 'G3',
        },
        {
            _id: '61597864f7dd2c5068dfcd51',
            name: 'G4',
        },
        {
            _id: '61597869f7dd2c5068dfcd53',
            name: 'G5',
        },
        {
            _id: '6159786ef7dd2c5068dfcd55',
            name: 'G6',
        },
        {
            _id: '6159787af7dd2c5068dfcd57',
            name: 'G7',
        },
        {
            _id: '61682029b4e3dbb95da968dd',
            name: 'G8',
        },
    ];

    const closeCreateModal = () => {
        setCreateModal((prev) => !prev);
    };

    return (
        <>
            {createModal ? (
                <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-100 text-black">
                    <div className="absolute w-full h-full bg-gray-100 opacity-10"></div>

                    <div className="bg-white w-11/12 md:max-w-md mx-auto rounded-2xl shadow-lg z-50 overflow-y-auto">
                        <div className="py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">
                                    Create Lottery
                                </p>
                            </div>

                            <p>{`Create Your New Lottery`}</p>

                            <div className="flex items-center">
                                <p className="mr-2">Prize: </p>
                                <select
                                    required
                                    className="outline-none text-blue-500 px-3 py-2 rounded-md w-full"
                                    value={prizeID}
                                    onChange={(e) => {
                                        setPrizeID(e.target.value);
                                    }}
                                >
                                    <option value="">Select One</option>
                                    {typeof provinces === 'undefined' ? (
                                        <option value="">Loading</option>
                                    ) : (
                                        prizes.map((prize) => {
                                            return (
                                                <option
                                                    value={prize._id}
                                                    key={prize._id}
                                                >
                                                    {prize.name}
                                                </option>
                                            );
                                        })
                                    )}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <p className="mr-2">Province: </p>
                                <select
                                    required
                                    className="outline-none text-blue-500 px-3 py-2 rounded-md w-full"
                                    value={provinceID}
                                    onChange={(e) => {
                                        setProvinceID(e.target.value);
                                    }}
                                >
                                    <option value="">Select One</option>
                                    {typeof provinces === 'undefined' ? (
                                        <option value="">Loading</option>
                                    ) : (
                                        provinces.map((province) => {
                                            return (
                                                <option
                                                    value={province._id}
                                                    key={province._id}
                                                >
                                                    {province.name}
                                                </option>
                                            );
                                        })
                                    )}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="lucky_number"
                                    className="block text-grey-darker font-bold text-lg mb-2"
                                >
                                    Lucky Number:
                                </label>
                                <div className="flex items-center bg-gray-100 py-2 px-3 rounded">
                                    <input
                                        type="text"
                                        id="lucky_number"
                                        placeholder="Lucky Number"
                                        className="bg-transparent outline-none text-black w-full"
                                        required
                                        onChange={(e) =>
                                            setLuckyNumber({
                                                ...luckyNumber,
                                                luckyNumber: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end pt-2">
                                <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                                    Create Lottery
                                </button>
                                <button
                                    className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
                                    onClick={closeCreateModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default CreateLottery;
