import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-[#3097D1] text-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#3097D1] text-base-100 rounded-box w-52 capitalize">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/media'>Media</Link></li>
                        <li><Link to='/about'>about me</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl capitalize">quick share</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 capitalize">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/media'>Media</Link></li>
                    <li><Link to='/about'>about me</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='' />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Header;