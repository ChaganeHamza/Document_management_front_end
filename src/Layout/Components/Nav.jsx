/*import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        props.setName('');
    }

    let menu;

    if (props.name === '') {
        menu = (
            <ul className="flex space-x-4">
                <li className="text-white">
                    <Link to="/login" className="block text-sm font-medium leading-6 text-blue-500">Login</Link>
                </li>
                <li className="text-white">
                    <Link to="/register" className="block text-sm font-medium leading-6 text-blue-500">Register</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="block text-sm font-medium leading-6 text-blue-500">Home</Link>

                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;*/
