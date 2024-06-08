import React, { useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import ViewButton from './ViewButton';  // Assurez-vous d'importer ces composants
import ModifyButton from './ModifyButton';
import DeleteButton from './DeleteButton';
import { useNavigate } from 'react-router-dom';

const TablePages = ({ columns, data, attributs, buttons }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();  // Initialisation de navigate

    const filteredData = data.filter((row) => {
        return Object.values(row).some((value) => {
            if (value === undefined || value === null) return false;
            return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
    });

    const handleView = (id) => {
        navigate(`/viewdocument/${id}`);  // Naviguer vers la route de détail
    };

    const handleEdit = (id) => {
        navigate(`/editdocument/${id}`);
    };

    const handleDelete = (id) => {
        navigate(`/deletedocument/${id}`);
    };
    

    return (
        <>
            <div className='flex flex-row justify-between p-4'>
                <div className='w-1/2 flex flex-row items-center'>
                    <div className="flex items-center bg-gray-300 text-gray-500 border-l border-y border-gray-200 py-1 px-2 rounded-l-md">
                        <IconSearch className="text-gray-500" />
                    </div>
                    <div className='w-full'>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full outline-none bg-white block p-1 border-[1.5px] font-normal text-gray-400 focus:font-medium focus:text-black border-gray-200 rounded-r-md"
                        />
                    </div>
                </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 rounded-xl">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}
                                className="px-1 py-1 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {attributs.map((attribut, attIndex) => (
                                <td key={attIndex}
                                    className="px-1 py-2 text-xs sm:text-sm md:text-base whitespace-nowrap">{row[attribut]}</td>
                            ))}
                            <td className="flex flex-row gap-2 py-4 whitespace-nowrap ml-2">
                                {buttons[0].view && <ViewButton onClick={() => handleView(row.id)} />}
                                {buttons[0].edit && <ModifyButton onClick={() => handleEdit(row.id)} />}
                                {buttons[0].delete && <DeleteButton onClick={() => handleDelete(row.id)} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TablePages;
