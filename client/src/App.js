import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { getProvinces } from './controllers/provinces';

function App() {
    return (
        <Router>
            <div className="bg-gradient-to-tl from-green-400 to-blue-500 h-screen">
                {/* <div className="absolute h-screen w-screen">
                    <img
                        src="https://images.unsplash.com/photo-1531685250784-7569952593d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                        alt=""
                        className="object-center h-full w-full"
                    />
                </div> */}

                <div className="w-full shadow-lg h-10v bg-blue-500 text-white px-4 py-3 sticky flex items-center">
                    <nav>
                        <ul className="flex items-center">
                            <li>
                                <p className="text-lg">
                                    Lottery Searching Engine
                                </p>
                            </li>
                            <li>
                                <Link to="/">
                                    <p className="mx-5 hover:text-gray-300 cursor-pointer">
                                        Home
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <p className="mx-5 hover:text-gray-300 cursor-pointer">
                                    About
                                </p>
                            </li>
                            <li>
                                <Link to="/dashboard">
                                    <p className="mx-5 hover:text-gray-300 cursor-pointer">
                                        Switch to page for Admin
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard
                            province={false}
                        />
                    </Route>
                    <Route path="/provinces">
                        <Dashboard
                            province={true}
                        />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
