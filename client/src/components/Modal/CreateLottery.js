import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLottery } from '../../controllers/lotteries';
import PrizesData from '../PrizesData';
import { useAlert } from 'react-alert';

function CreateLottery({ createModal, setCreateModal, setModalSignal }) {
    const dispatch = useDispatch();
    const { provinces } = useSelector((state) => state.provinces);
    const [lotteryData, setLotteryData] = useState({
        province: '',
        prize: '',
        luckyNumber: '',
    });
    const alert = useAlert();
    const closeCreateModal = () => {
        setCreateModal((prev) => !prev);
    };

    const clear = () => {
        setLotteryData({
            luckyNumber: '',
        });
    };

    const handleCreate = (e) => {
        const { luckyNumber, province, prize } = lotteryData;
        if (
            luckyNumber.trim() === '' ||
            province.trim() === '' ||
            prize.trim() === ''
        ) {
            alert.error('Please input fields!');
        } else {
            e.preventDefault();
            dispatch(createLottery(lotteryData));
            setModalSignal(true);
            alert.success('Create Successfully!');
            clear();
            closeCreateModal();
        }
    };

    // transition
    const styles = {
        transition: 'all 0.5s ease-out',
    };

    const [transition, setTransition] = useState({
        opacity: 0,
        visibility: 'hidden',
    });

    useEffect(() => {
        if (createModal === true) {
            setTransition({
                ...transition,
                visibility: 'visible',
                opacity: 1,
            });
        } else {
            setTransition({
                ...transition,
                visibility: 'hidden',
                opacity: 0,
            });
        }
    // eslint-disable-next-line
    }, [createModal]);

    return (
        <>
            <div
                className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-100 text-black"
                style={{
                    ...styles,
                    opacity: transition.opacity,
                    visibility: transition.visibility,
                }}
            >
                <div className="absolute w-full h-full bg-gray-100 opacity-10"></div>

                <div className="bg-white w-11/12 md:max-w-md mx-auto rounded-2xl shadow-lg z-50 overflow-y-auto">
                    <div className="py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">Create Lottery</p>
                        </div>

                        <p>{`Create Your New Lottery`}</p>

                        <div className="flex items-center">
                            <p className="mr-2">Prize: </p>
                            <select
                                required
                                className="outline-none text-blue-500 px-3 py-2 rounded-md w-full"
                                defaultValue={lotteryData.prize}
                                onChange={(e) => {
                                    setLotteryData({
                                        ...lotteryData,
                                        prize: e.target.value,
                                    });
                                }}
                            >
                                <option value="">Select One</option>
                                {typeof provinces === 'undefined' ? (
                                    <option value="">Loading</option>
                                ) : (
                                    PrizesData.map((prize) => {
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
                                defaultValue={lotteryData.province}
                                onChange={(e) => {
                                    setLotteryData({
                                        ...lotteryData,
                                        province: e.target.value,
                                    });
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
                                        setLotteryData({
                                            ...lotteryData,
                                            luckyNumber: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                                onClick={(e) => handleCreate(e)}
                            >
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
        </>
    );
}

export default CreateLottery;
