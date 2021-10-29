import React, { useState, useEffect } from 'react';
import { deleteProvince } from '../../controllers/provinces';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

function DeleteProvince({
    deleteModal,
    setDeleteModal,
    provinceModal,
    setModalSignal,
}) {
    const dispatch = useDispatch();
    const closeDeleteModal = () => {
        setDeleteModal((prev) => !prev);
    };
    const alert = useAlert();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProvince(provinceModal._id));
        setModalSignal(true);
        closeDeleteModal();
        alert.success('Delete Successfully!');
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
        if (deleteModal === true) {
            setTransition({
                ...transition,
                visibility: 'visible',
                opacity: 1,
            });
        } else {
            setTransition({ ...transition, visibility: 'hidden', opacity: 0 });
        }
        // eslint-disable-next-line
    }, [deleteModal]);

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
                            <p className="text-2xl font-bold">Delete</p>
                        </div>

                        <p>
                            {`Are you sure you want to delete this province? `}
                        </p>

                        <div className="flex justify-end pt-2">
                            <button
                                className="transition duration-200 ease-in-out px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                            <button
                                className="transition duration-200 ease-in-out px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
                                onClick={closeDeleteModal}
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

export default DeleteProvince;
