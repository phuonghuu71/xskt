import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import moment from 'moment';
import { getProvinces } from '../controllers/provinces';
import { getLotteries } from '../controllers/lotteries';
import { useDispatch, useSelector } from 'react-redux';
import PrizesData from './PrizesData';
import LotteriesInfoHome from './LotteriesInfoHome';
import { useAlert } from 'react-alert';

function Home() {
    const dispatch = useDispatch();
    const { provinces } = useSelector((state) => state.provinces);
    const [lotteryData, setLotteryData] = useState({
        code: '',
        provinceCode: '',
        dateValue: '',
    });
    const [provincesData, setProvincesData] = useState(provinces);
    const { lotteries } = useSelector((state) => state.lotteries);
    const [lotteriesData, setLotteriesData] = useState(lotteries);
    const alert = useAlert();

    useEffect(() => {
        dispatch(getProvinces(0));
    }, [dispatch]);

    useEffect(() => {
        if (provinces) setProvincesData(provinces);
    }, [provinces]);

    useEffect(() => {
        if (lotteries) setLotteriesData(lotteries);
    }, [lotteries]);

    const handleSearch = (e) => {
        e.preventDefault();
        const { code, provinceCode, dateValue } = lotteryData;
        if (code !== 'XSKT') {
            console.log('invalid code');
            alert.error('Invalid format, please enter the right format!');
            return;
        }
        if (!moment(dateValue, 'MM/DD/YYYY', true).isValid()) {
            console.log('invalid date');
            alert.error('Invalid date, please enter the right format!');
            return;
        }
        if (!provincesData.find((province) => province.code === provinceCode)) {
            console.log('invalid province');
            alert.error(
                'Invalid province code, please enter the right format!'
            );
            return;
        }
        let province = provincesData.find(
            (province) => province.code === provinceCode
        );
        dispatch(getLotteries(province._id, new Date(dateValue)));
        alert.info('Search Successfully!');
    };

    return (
        <div className="sticky">
            <div className="space-y-2 mx-auto w-80w items-center mt-5 flex justify-between">
                {/* search bar */}
                <div className="w-40w ml-6">
                    <div className="ml-6 mb-2 font-semibold text-xl text-white">
                        <p>Example Input Search: XSKT AG 12/31/2021</p>
                    </div>
                    <div>
                        <div className="flex items-center bg-white shadow-md py-4 px-6 rounded-full">
                            <input
                                type="text"
                                placeholder="Search your lottery here"
                                className="bg-transparent outline-none text-black w-full"
                                onChange={(e) => {
                                    let word = e.target.value
                                        .replace(/\s+/g, ' ')
                                        .trim().split(' ');
                                    console.log(word);
                                    setLotteryData({
                                        ...lotteryData,
                                        code: word[0],
                                        provinceCode: word[1],
                                        dateValue: word[2],
                                    });
                                }}
                            />
                            <button
                                type="button"
                                onClick={(e) => handleSearch(e)}
                            >
                                <AiOutlineSearch className="w-6 h-6 mr-3 text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* result */}
                <div className="mr-6 flex">
                    <div className="ml-6 font-semibold px-6 text-white">
                        <div>
                            {provincesData
                                .filter(
                                    (province) =>
                                        province.code ===
                                        lotteryData.provinceCode
                                )
                                .map((province) => {
                                    return (
                                        <p key={province._id}>
                                            Province: {province.name}
                                        </p>
                                    );
                                })}
                        </div>
                        <div>
                            {lotteryData.dateValue === '' ? null : (
                                <p>Date: {lotteryData.dateValue}</p>
                            )}
                        </div>
                    </div>
                    <table className="lottery shadow-md">
                        <thead className="bg-blue-400 text-white">
                            <tr>
                                <th className="py-4 px-5">Prize</th>
                                <th className="py-4 px-5">Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PrizesData.map((prize) => {
                                return (
                                    <tr key={prize._id}>
                                        <td>{prize.name}</td>
                                        <td className="text-black">
                                            <div className="flex justify-center">
                                                <LotteriesInfoHome
                                                    lotteries={lotteriesData}
                                                    prizeCode={prize._id}
                                                    provinceID={
                                                        lotteryData.provinceID
                                                    }
                                                    dateValue={
                                                        lotteryData.dateValue
                                                    }
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
