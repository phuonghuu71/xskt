import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div className="bg-gradient-to-tl from-green-400 to-blue-500 h-screen">
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
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
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
