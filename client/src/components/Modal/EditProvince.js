import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProvince } from '../../controllers/provinces';
import { useAlert } from 'react-alert';

function EditProvince({
    editModal,
    setEditModal,
    provinceModal,
    setModalSignal,
}) {
    const [provinceData, setProvinceData] = useState({
        code: '',
        name: '',
    });
    const dispatch = useDispatch();
    const alert = useAlert();
    const closeEditModal = () => {
        setEditModal((prev) => !prev);
    };

    useEffect(() => {
        setProvinceData({
            code: provinceModal.code,
            name: provinceModal.name,
        });
    }, [provinceModal]);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateProvince(provinceModal._id, provinceData));
        setModalSignal(true);
        alert.success('Edit Successfully!');
        closeEditModal();
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
                className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-100"
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
                            <p className="text-2xl font-bold">Edit Province</p>
                        </div>

                        <p>Edit your province</p>

                        <div className="mb-4">
                            <label
                                htmlFor="province_code"
                                className="block text-grey-darker font-bold text-lg mb-2"
                            >
                                Province Code:
                            </label>
                            <div className="flex items-center bg-gray-100 py-2 px-3 rounded">
                                <input
                                    type="text"
                                    id="province_code"
                                    placeholder="Province Code"
                                    className="bg-transparent outline-none text-black w-full"
                                    required
                                    defaultValue={provinceData.code}
                                    onChange={(e) =>
                                        setProvinceData({
                                            ...provinceData,
                                            code: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-4 ">
                            <label
                                htmlFor="province_name"
                                className="text-grey-darker text-lg font-bold mb-2 block"
                            >
                                Province Name:
                            </label>
                            <div className="flex items-center bg-gray-100 py-2 px-3 rounded">
                                <input
                                    type="text"
                                    id="province_name"
                                    placeholder="Province Name"
                                    className="bg-transparent outline-none text-black w-full"
                                    required
                                    defaultValue={provinceData.name}
                                    onChange={(e) =>
                                        setProvinceData({
                                            ...provinceData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <br />
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                                onClick={(e) => handleEdit(e)}
                            >
                                Edit
                            </button>
                            <button
                                className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
                                onClick={closeEditModal}
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

export default EditProvince;
