import React from "react";
import {IconEye} from '@tabler/icons-react';

const ViewButton = ({onClick}) => {
    return (
        <button 
        title="View"
        onClick={onClick}
        className="text-blue-500 p-1 hover:bg-blue-100 rounded-xl border-[1.5px] border-gray-200">
        <IconEye />
    </button>
    );
};

export default ViewButton;