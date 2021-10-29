import React, { useEffect } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory,
} from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import { IoTicketOutline } from 'react-icons/io5';
import Provinces from './Provinces';
import Lotteries from './Lotteries';
import { useAlert } from 'react-alert';
import { loginAuth } from '../controllers/users';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
    const handleLogout = (e) => {
        e.preventDefault();
    };
    const { path, url } = useRouteMatch();
    const history = useHistory();
    const alert = useAlert();

    const { message_auth } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        dispatch(loginAuth(token));
    }, [dispatch]);

    useEffect(() => {
        if (message_auth) {
            if (message_auth !== 'Welcome') {
                history.push('/login');
                alert.info('Please Login');
            }
        }
    }, [message_auth, alert, history]);

    return (
        <div className="flex z-0">
            {/* sidebar */}
            <aside className="w-64 h-90v bg-gray shadow-md w-fulll hidden sm:block">
                <div className="flex flex-col justify-between h-full pl-6 pt-4 pb-4 bg-blue-600">
                    <div className="text-md">
                        <Link to={`${url}/provinces`}>
                            <div className="transition duration-200 ease-in-out bg-blue-800 text-white p-4 rounded-l-3xl mt-6 cursor-pointer hover:bg-white hover:text-blue-800 flex items-center">
                                <ImLocation className="mr-2" />
                                <p>Manage Provinces</p>
                            </div>
                        </Link>
                        <Link to={`${url}/lotteries`}>
                            <div className="transition duration-200 ease-in-out bg-blue-800 text-white p-4 rounded-l-3xl mt-6 cursor-pointer hover:bg-white hover:text-blue-800 flex items-center">
                                <IoTicketOutline className="mr-2" />
                                <p>Manage Lotteries</p>
                            </div>
                        </Link>
                    </div>

                    <Link to="/login">
                        <div className="transition duration-200 ease-in-out flex p-3 text-white bg-red-500 hover:bg-red-600 rounded-l-3xl cursor-pointer text-center text-md">
                            <button
                                className="inline-flex items-center"
                                onClick={(e) => handleLogout(e)}
                            >
                                <FiLogOut className="w-4 h-4 mr-2" />
                                <span className="font-semibold">Logout</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </aside>

            {/* {province ? <Provinces /> : <Lotteries />} */}

            <Switch>
                <Route path={`${path}/provinces`}>
                    <Provinces />
                </Route>
                <Route path={`${path}/lotteries`}>
                    <Lotteries />
                </Route>
            </Switch>
        </div>
    );
}

export default Dashboard;
