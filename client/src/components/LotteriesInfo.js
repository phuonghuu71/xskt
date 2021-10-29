import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import DeleteLottery from './Modal/DeleteLottery';
import EditLottery from './Modal/EditLottery';

function LotteriesInfo({ lotteries, prizeCode, modalSignal, setModalSignal }) {
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [lottery, setLottery] = useState({
        _id: '',
        luckyNumber: '',
    });

    const openDeleteModal = (lottery) => {
        setDeleteModal((prev) => !prev);
        setLottery(lottery);
    };

    const openEditmodal = (lottery) => {
        setEditModal((prev) => !prev);
        setLottery(lottery);
    };

    return typeof lotteries === 'undefined' ? (
        <p className="text-center"></p>
    ) : (
        <>
            {lotteries
                .filter((lottery) => {
                    if (typeof lottery.prize === 'undefined') {
                        return null;
                    } else return lottery.prize._id === prizeCode;
                })
                .map((lottery) => {
                    return (
                        <div className="flex" key={lottery._id}>
                            <p className="mx-2">{lottery.luckyNumber}</p>
                            <AiFillEdit
                                className="mr-2 hover:text-gray-300"
                                onClick={() => openEditmodal(lottery)}
                            />
                            <AiFillDelete
                                className="mr-2 hover:text-gray-300"
                                onClick={(e) => openDeleteModal(lottery)}
                            />
                        </div>
                    );
                })}
            <DeleteLottery
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                lottery={lottery}
                setModalSignal={setModalSignal}
            />
            <EditLottery 
                editModal={editModal}
                setEditModal={setEditModal}
                setModalSignal={setModalSignal}
                lottery={lottery}
            />
        </>
    );
}

export default LotteriesInfo;
