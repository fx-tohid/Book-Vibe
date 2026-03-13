import React from 'react';
import { Outlet } from 'react-router';
import Header from './Components/Header/Header';
import './App.css'
import Home from './Home'
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
            {/* Footer */}
        </div>
    );
};

export default Root;