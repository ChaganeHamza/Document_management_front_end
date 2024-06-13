import React, {useState} from "react";




const Table = ({ columns, data, attributs}) => {
    const [searchTerm ] = useState('');

    const filteredData = data.filter((row) =>
        Object.values(row).some(
            (value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

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


    return (
        <>
            <div className="flex flex-row justify-between p-2">
            </div>
            <div className="overflow-x-auto">
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;