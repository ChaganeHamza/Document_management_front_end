import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TablePages from '../../Layout/Components/TablePages';
import { useNavigate } from 'react-router-dom';


const PurchaseOrders = (props) => {
    const columns = ['Numéro document', 'Code client', 'Nom client', 'Date document', 'Total document', 'Action'];
    const attributs = ['DocNum', 'CardCode', 'CardName', 'DocDate', 'DocTotal'];

    const navigate = useNavigate();


    const [PurchaseOrders, setPurchaseOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44330/api/getPurchaseOrders');
                setPurchaseOrders(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleView = (id) => {
        console.log("View", id);
        navigate(`/viewdocument/${id}`);  // Assurez-vous que l'ID est correct ici
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
                columns={columns} 
                data={PurchaseOrders} 
                attributs={attributs} 
                buttons={[{ view: true, edit: true, delete: true }]} 
                onView={handleView} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
        </div>
    );
};

export default PurchaseOrders;