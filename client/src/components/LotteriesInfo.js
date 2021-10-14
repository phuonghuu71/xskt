import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

function showItems(lotteries, prizeCode) {
    return typeof lotteries === 'undefined' ? (
        <p className="text-center">Loading</p>
    ) : (
        lotteries
            .filter((lottery) => {
                if (typeof lottery.prize === 'undefined') {
                    return;
                } else return lottery.prize._id === prizeCode;
            })
            .map((lottery) => {
                return (
                    <div className="flex">
                        <p className="mx-2">{lottery.luckyNumber}</p>
                        <AiFillEdit className="mr-2 hover:text-gray-300" />
                        <AiFillDelete className="mr-2 hover:text-gray-300" />
                    </div>
                );
            })
    );
};

export default showItems;
