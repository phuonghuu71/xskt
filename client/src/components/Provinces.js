import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { createProvince, updateProvince } from '../controllers/provinces';
import DeleteProvince from './Modal/DeleteProvince';
import { getProvinces } from '../controllers/provinces';
import { useAlert } from 'react-alert';
import EditProvince from './Modal/EditProvince';

function Provinces() {
    const dispatch = useDispatch();
    const alert = useAlert();

    // pagination
    
    // get data
    const { provinces, numberOfPages, currentPage } = useSelector(
        (state) => state.provinces
    );

    // changing page
    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currPage = data.selected + 1;
        setCurrPage(currPage);
    };

    // current and numbpage state
    const [currPage, setCurrPage] = useState(1);
    const [numbPage, setNumbPage] = useState(1);

    useEffect(() => {
        setCurrPage(currentPage);
        setNumbPage(numberOfPages);
    }, [currentPage, numberOfPages]);

    useEffect(() => {
        if (currPage) dispatch(getProvinces(currPage));
    }, [currPage]);

    // end of pagination

    // create province

    // data for create
    const [provinceData, setProvinceData] = useState({
        code: '',
        name: '',
    });

    // clear field
    const clear = () => {
        setProvinceData({
            code: '',
            name: '',
        });
    };

    // create handle
    const handleCreate = (e) => {
        // e.preventDefault();
        window.location.reload();
        const { code, name } = provinceData;
        if (code.trim() === '' || name.trim() === '') {
            alert.error('Please input fields!');
        } else {
            dispatch(createProvince(provinceData));
            dispatch(getProvinces(currPage));
            alert.success('Create Successfully');
            clear();
        }
    };

    // end of create province

    // delete province
    const [deleteModal, setDeleteModal] = useState(false);
    const [provinceModal, setProvinceModal] = useState({
        code: '',
        name: '',
    });

    const openDeleteModal = (provinceModal) => {
        setDeleteModal((prev) => !prev);
        setProvinceModal(provinceModal);
    };
    // end of delete province

    // edit province
    const [editModal, setEditModal] = useState(false);

    const openEditModal = (provinceModal) => {
        setEditModal((prev) => !prev);
        setProvinceModal(provinceModal);
    };
    // end of edit province

    return (
        <div className="flex items-start h-90v">
            {/* table */}
            <div className="ml-20">
                <table className="text-white border-separate text-md">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-4 px-5">Province Code</th>
                            <th className="py-4 px-5">Province Name</th>
                            <th className="py-4 px-5">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {typeof provinces === 'undefined'
                            ? 'loading'
                            
                            : provinces.map((province) => {
                                  return (
                                      <tr key={province._id}>
                                          <td>{province.code}</td>
                                          <td>{province.name}</td>
                                          <td>
                                              <div className="flex items-center justify-center">
                                                  <AiFillEdit
                                                      className="mr-2 hover:text-gray-300"
                                                      onClick={() =>
                                                          openEditModal(
                                                              province
                                                          )
                                                      }
                                                  />
                                                  <AiFillDelete
                                                      className="mr-2 hover:text-gray-300"
                                                      onClick={() =>
                                                          openDeleteModal(
                                                              province
                                                          )
                                                      }
                                                  />
                                              </div>
                                          </td>
                                      </tr>
                                  );
                              })}
                    </tbody>
                </table>

                <DeleteProvince
                    deleteModal={deleteModal}
                    setDeleteModal={setDeleteModal}
                    provinceModal={provinceModal}
                />
                <EditProvince
                    editModal={editModal}
                    setEditModal={setEditModal}
                    provinceModal={provinceModal}
                    currentPage={currPage}
                />

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={numbPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={
                        'flex justify-center text-white text-md'
                    }
                    pageClassName={''}
                    pageLinkClassName={'mx-3'}
                    previousClassName={''}
                    previousLinkClassName={'hover:text-gray-300'}
                    nextClassName={''}
                    nextLinkClassName={'hover:text-gray-300'}
                    breakClassName={''}
                    breakLinkClassName={''}
                    activeClassName={'text-blue-800'}
                />
            </div>
            {/* insert */}
            <div className="ml-20 mt-4">
                <div className="bg-blue-500 shadow-lg rounded-2xl p-6 w-96 text-white mx-auto bg-opacity-80 backdrop-filter backdrop-blur-sm">
                    <h1 className="text-center font-bold text-3xl">
                        New Province
                    </h1>
                    <p className="text-center mb-2">Insert new Province</p>
                    <form
                        action=""
                        autoComplete="off"
                        noValidate
                        onSubmit={handleCreate}
                    >
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
                                    value={provinceData.code}
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
                                    value={provinceData.name}
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
                        <div className="mb-2">
                            <button
                                type="submit"
                                className="bg-white text-blue-500 hover:bg-blue-800 hover:text-white py-3 rounded-md w-full"
                            >
                                <p className="text-lg font-semibold">
                                    Create Province
                                </p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* end of insert */}
        </div>
    );
}

export default Provinces;
