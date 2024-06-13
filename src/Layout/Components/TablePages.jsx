import React, { useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import ViewButton from './ViewButton';  
import ModifyButton from './ModifyButton';
import DeleteButton from './DeleteButton';
import { useNavigate } from 'react-router-dom';

const TablePages = ({  data, buttons, table }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterState, setFilterState] = useState('');
    const navigate = useNavigate();

    const columns = ['Numéro document', 'Code client', 'Nom client', 'Date document', 'Total document', 'Status', 'Action'];
    const attributs = ['DocNum', 'CardCode', 'CardName', 'DocDate', 'DocTotal', 'Status'];

    const filteredData = data.filter((row) => {
        const matchesSearch = Object.values(row).some((value) => {
            if (value === undefined || value === null) return false;
            return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
        });

        const matchesFilter = filterState === '' || row.Status === filterState;

        return matchesSearch && matchesFilter;
    });

   // const selectedStyle = 'text-pc-300 text-pc border-[2px] border-pc hover:bg-indigo-100';

    const mapStatusToFrench = (status) => {
        switch (status) {
          case 'O':
            return <div className="py-[1px] text-center px-3 w-max font-semibold text-white bg-green-600 rounded-2xl">Ouvert</div>;
          case 'C':
            return <div className="py-[1px] text-center px-3 w-max font-semibold text-white bg-red-600 rounded-2xl">Fermé</div>;
          case 'R':
            return <div className="py-[1px] text-center px-3 w-max font-semibold text-white bg-blue-600 rounded-2xl">Libéré</div>;
          case 'D':
            return <div className="py-[1px] text-center px-3 w-max font-semibold text-white bg-yellow-600 rounded-2xl">Brouillon</div>;
          case 'A':
            return <div className="py-[1px] text-center px-3 w-max font-semibold text-white bg-gray-600 rounded-2xl">Annulé</div>;
          default:
            return status;
        }
      };
      

    const handleView = (id) => {
        console.log("Navigating to view document with ID:", id);
        navigate(`/viewdocument/${id}?table=${table}`);
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
                        <select
                        value={filterState}
                        onChange={(e) => setFilterState(e.target.value)}
                        className="outline-none text-pc p-2 border font-semibold border-pc rounded-lg "
                    >
                        <option value="">Tous les Status</option>
                        <option value="O">Ouvert</option>
                        <option value="C">Fermé</option>
                        <option value="R">Libéré</option>
                        <option value="D">Brouillon</option>
                        <option value="A">Annulé</option>
                    </select>
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
                                    className="px-1 py-2 text-xs sm:text-sm md:text-base whitespace-nowrap">{mapStatusToFrench(row[attribut])}</td>
                            ))}
                            <td className="flex flex-row gap-2 py-4 whitespace-nowrap ml-2">
                                {console.log(row.Id)}
                                {buttons[0].view && <ViewButton onClick={() => handleView(row.Id)} />}
                                {buttons[0].edit && <ModifyButton onClick={() => handleEdit(row.Id)} />}
                                {buttons[0].delete && <DeleteButton onClick={() => handleDelete(row.Id)} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TablePages;
