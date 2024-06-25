import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TablePages from '../../Layout/Components/TablePages';
import { useNavigate } from 'react-router-dom';

const SalesOrders = (props) => {


    const navigate = useNavigate();



    const [SalesOrders, setSalesOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5197/api/sap/getSalesOrders');
                const translatedSalesOrders = response.data.map(order => ({
                    ...order,
                    
                }));
                setSalesOrders(translatedSalesOrders);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleView = (id) => {
        console.log("View", id);
        navigate(`/viewdocument/${id}`);
    };

    const handleEdit = (id) => {
        console.log("Edit", id);
        navigate(`/editdocument/${id}`);
    };

    const handleDelete = (id) => {
        console.log("Delete", id);
        navigate(`/deletedocument/${id}`);
    };

    return (
        <div className="w-full border p-1 rounded-lg overflow-auto">
            <TablePages 
                data={SalesOrders}  
                onView={handleView} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
                buttons={[{ view: true, edit: true, delete: true }]} 
                table={'ORDR'}
            />
        </div>
    );
};

export default SalesOrders;
