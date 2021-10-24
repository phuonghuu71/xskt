import React from 'react';

function LotteriesInfoHome({ lotteries, prizeCode }) {
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
                        </div>
                    );
                })}
        </>
    );
}

export default LotteriesInfoHome;
