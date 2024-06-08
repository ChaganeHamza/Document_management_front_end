import React from "react";
import {IconTrash} from '@tabler/icons-react';

const DeleteButton = ({onClick}) => {
    return (
        <button 
        title="Delete Item"
        onClick={onClick}
        className="text-red-500 p-1 hover:bg-red-100 rounded-xl border-[1.5px] border-gray-200">
        <IconTrash />
    </button>
    );
};

export default DeleteButton;