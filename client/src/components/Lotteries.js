import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProvinces } from '../controllers/provinces';
import { getLotteries } from '../controllers/lotteries';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LotteriesInfo from './LotteriesInfo';
import NormalButton from './Buttons/NormalButton';
import CreateLottery from './Modal/CreateLottery';
import PrizesData from './PrizesData';

function Lotteries() {
    const dispatch = useDispatch();
    const { lotteries } = useSelector((state) => state.lotteries);
    const [lotteriesCurrData, setLotteriesCurrData] = useState(lotteries);
    const [modalSignal, setModalSignal] = useState(false);
    const { provinces } = useSelector((state) => state.provinces);
    const [dateValue, setDateValue] = useState(new Date());
    const [provinceID, setProvinceID] = useState({
        _id: '',
    });

    useEffect(() => {
        dispatch(getProvinces(0));
    }, [dispatch, lotteries]);

    useEffect(() => {
        if (lotteries) {
            setLotteriesCurrData(lotteries);
        }
    }, [lotteries]);

    useEffect(() => {
        if (modalSignal) {
            dispatch(getLotteries(provinceID, dateValue));
            setModalSignal(false);
        }
    }, [modalSignal, provinceID, dateValue, dispatch]);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getLotteries(provinceID, dateValue));
    };

    const [createModal, setCreateModal] = useState(false);
    const openCreateModal = () => {
        setCreateModal((prev) => !prev);
    };

    return (
        <div className="flex items-start h-90v">
            {/* result */}
            <div className="mx-6 mt-4 flex space-x-10">
                <div className="font-semibold text-white space-y-6">
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

                    <div className="flex items-center">
                        <p className="mr-2">Date: </p>
                        <div>
                            <DatePicker
                                selected={dateValue}
                                onChange={(dateValue) => {
                                    console.log(new Date(dateValue), dateValue);
                                    setDateValue(dateValue);
                                }}
                                className="outline-none text-blue-500 px-3 py-2 rounded-md"
                            />
                        </div>
                    </div>

                    <NormalButton
                        type="button"
                        text="Show Data"
                        handleButton={(e) => handleSearch(e)}
                    />

                    <NormalButton
                        type="button"
                        text="Create Lottery"
                        handleButton={openCreateModal}
                    />
                </div>

                <table className="lottery shadow-md w-30w">
                    <thead className="bg-blue-400 text-white">
                        <tr>
                            <th className="py-4 px-5 w-5">Prize</th>
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
                                            <LotteriesInfo
                                                lotteries={lotteriesCurrData}
                                                prizeCode={prize._id}
                                                provinceID={provinceID}
                                                dateValue={dateValue}
                                                setModalSignal={setModalSignal}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <CreateLottery
                createModal={createModal}
                setCreateModal={setCreateModal}
                modalSignal={modalSignal}
                setModalSignal={setModalSignal}
            />
        </div>
    );
}

export default Lotteries;
