import React from "react";
import {IconPencil} from '@tabler/icons-react';


const ModifyButton = ({onClick}) => {
    return (
    <button
        onClick={onClick}
        className="text-green-500 p-1 hover:bg-green-100 rounded-xl border-[1.5px] border-gray-200"
    >
        <IconPencil />
    </button>
    );
};

export default ModifyButton;