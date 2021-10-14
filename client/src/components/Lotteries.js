import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProvinces } from '../controllers/provinces';
import { getLotteries } from '../controllers/lotteries';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import showItems from './LotteriesInfo';
import NormalButton from './Buttons/NormalButton';
import CreateLottery from './Modal/CreateLottery';

function Lotteries() {
    const dispatch = useDispatch();
    const { lotteries } = useSelector((state) => state.lotteries);
    const { provinces } = useSelector((state) => state.provinces);
    const [dateValue, setDateValue] = useState(new Date());
    const [provinceID, setProvinceID] = useState({
        _id: '',
    });

    useEffect(() => {
        dispatch(getProvinces(0));
    }, []);

    const GDB = '615977f4f7dd2c5068dfcd49';
    const G1 = '6159784ff7dd2c5068dfcd4b';
    const G2 = '61597856f7dd2c5068dfcd4d';
    const G3 = '6159785bf7dd2c5068dfcd4f';
    const G4 = '61597864f7dd2c5068dfcd51';
    const G5 = '61597869f7dd2c5068dfcd53';
    const G6 = '6159786ef7dd2c5068dfcd55';
    const G7 = '6159787af7dd2c5068dfcd57';
    const G8 = '61682029b4e3dbb95da968dd';

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
                                    console.log(new Date(dateValue));
                                    setDateValue(dateValue);
                                }}
                                className="outline-none text-blue-500 px-3 py-2 rounded-md"
                            />
                        </div>
                    </div>

                    <NormalButton
                        type="button"
                        text="Show Data"
                        handleButton={handleSearch}
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
                        <tr>
                            <td>GDB</td>
                            <td className="text-red-500">
                                <div className="flex justify-center">
                                    {showItems(lotteries, GDB)}
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>G1</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G1)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>G2</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G2)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>G3</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G3)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>G4</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G4)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>G5</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G5)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>G6</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G6)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>G7</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G7)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>G8</td>
                            <td>
                                <div className="flex justify-center">
                                    {showItems(lotteries, G8)}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <CreateLottery
                createModal={createModal}
                setCreateModal={setCreateModal}
            />
        </div>
    );
}

export default Lotteries;
