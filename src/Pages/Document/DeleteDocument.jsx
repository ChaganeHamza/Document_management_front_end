import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const DeleteDocument = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const query = useQuery();
    const table = query.get('table');

    const [documentId, setDocumentId] = useState('');

    useEffect(() => {
        if (id && table) {
            setDocumentId(`${table}${id}`);
        }
    }, [id, table]);

    const handleDelete = async () => {
        const payload = {
            id: documentId
        };

        try {
            const response = await axios.delete('http://localhost:5197/api/sap/deleteDocument', {
                data: payload // Utilisez 'data' pour envoyer le payload avec axios.delete
            });
            if (response.status === 200) {
                toast.success('Document supprimé avec succès!');
                navigate(-1);
            } else {
                toast.error('Échec de la suppression du document. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Error deleting document:', error);
            toast.error(`Échec de la suppression du document: ${error.message}`);
        }
    };

    return (
        <div className="container mx-auto">
            <Toaster />
            <h1 className="text-2xl font-bold mb-4">Supprimer Document</h1>
            <div className="space-y-4">
                <div className="col-span-2 space-y-2">
                    <div>
                        <label htmlFor="id" className="font-bold">Document ID:</label>
                        <input type="text" id="id" name="id" value={documentId} readOnly className="border rounded-md p-2 w-full" />
                    </div>
                </div>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Supprimer le document
                </button>
            </div>
        </div>
    );
};

export default DeleteDocument;
