import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TablePages from '../../Layout/Components/TablePages';
import { useNavigate } from 'react-router-dom';

const PurchaseOrders = (props) => {


    const navigate = useNavigate();



    const [PurchaseOrders, setPurchaseOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44330/api/getPurchaseOrders');
                const translatedPurchaseOrders = response.data.map(order => ({
                    ...order,
                    
                }));
                setPurchaseOrders(translatedPurchaseOrders);
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
                data={PurchaseOrders}  
                onView={handleView} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
                buttons={[{ view: true, edit: true, delete: true }]} 
                table={'OPOR'}
            />
        </div>
    );
};

export default PurchaseOrders;
