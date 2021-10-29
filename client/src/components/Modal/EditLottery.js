import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLottery } from '../../controllers/lotteries';
import { useAlert } from 'react-alert';

function EditLottery({ editModal, setEditModal, setModalSignal, lottery }) {
    const dispatch = useDispatch();
    const [lotteryData, setLotteryData] = useState({
        _id: '',
        luckyNumber: '',
    });
    const alert = useAlert();
    const closeEditModal = () => {
        setEditModal((prev) => !prev);
    };

    const closeCreateModal = () => {
        setEditModal((prev) => !prev);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateLottery(lotteryData._id, lotteryData));
        setModalSignal(true);
        alert.success('Edit Successfully!');
        closeEditModal();
    };

    useEffect(() => {
        setLotteryData(lottery);
    }, [lottery]);

    // transition
    const styles = {
        transition: 'all 0.5s ease-out',
        visibility: 'hidden',
    };

    const [transition, setTransition] = useState({
        opacity: 0,
    });

    useEffect(() => {
        if (editModal === true) {
            setTransition({
                ...transition,
                visibility: 'visible',
                opacity: 1,
            });
        } else {
            setTransition({ ...transition, visibility: 'hidden', opacity: 0 });
        }
        // eslint-disable-next-line
    }, [editModal]);

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
                            <p className="text-2xl font-bold">Edit Lottery</p>
                        </div>

                        <p>{`Edit Your Lottery`}</p>

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
                                    defaultValue={lotteryData.luckyNumber}
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
                                onClick={(e) => handleEdit(e)}
                            >
                                Edit Lottery
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

export default EditLottery;
