import React from "react";


const Button = ({icon, onClick, className}) => {
    return (
        <button 
        onClick={onClick}
        className={` p-1 text-gray-300  hover:bg-gray-50 rounded-xl border-[2px] border-gray-300`+ className}>
        {icon}
    </button>
    );
};

export default Button;