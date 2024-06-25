import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const EditDocument = () => {
    const { id } = useParams();
    const query = useQuery();
    const table = query.get('table');
    const navigate = useNavigate();

    const [documentData, setDocumentData] = useState({
        id: '',
        cardCode: '',
        cardName: '',
        docDate: '',
        docTotal: 0,
        docStatus: ''
    });

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(`http://localhost:5197/api/sap/getDocumentById?id=${table}${id}`);
                const data = response.data;

                setDocumentData({
                    id: data.docEntry ? `${table}${data.docEntry}` : '',
                    cardCode: data.cardCode || '',
                    cardName: data.cardName || '',
                    docDate: data.docDate ? new Date(data.docDate).toISOString().split('T')[0] : '',
                    docTotal: data.docTotal || 0,
                    docStatus: data.docStatus || ''
                });
            } catch (error) {
                console.error('Error fetching document data:', error);
                toast.error('Erreur lors du chargement des données du document. Veuillez réessayer.');
            }
        };

        fetchDocument();
    }, [id, table]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDocumentData({ ...documentData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            id: documentData.id,
            cardCode: documentData.cardCode,
            cardName: documentData.cardName,
            docDate: documentData.docDate,
            docTotal: documentData.docTotal,
            docStatus: documentData.docStatus
        };
    
        try {
            const response = await axios.post('http://localhost:5197/api/sap/updateDocument', payload);
            if (response.status === 200) {
                toast.success('Document modifié avec succès!');
                navigate(-1);
            } else {
                toast.error('Échec de la mise à jour du document. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Error updating document:', error);
            toast.error(`Échec de la mise à jour du document: ${error.message}`);
        }
    };

    return (
        <div className="container mx-auto">
            <Toaster position="top-right" />
            <h1 className="text-2xl font-bold mb-4">Modifier Document</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 space-y-2">
                        <div>
                            <label htmlFor="id" className="font-bold">Document ID:</label>
                            <input type="text" id="id" name="id" value={documentData.id} readOnly className="border rounded-md p-2 w-full" />
                        </div>

                        <div>
                            <label htmlFor="cardCode" className="font-bold">Card Code:</label>
                            <input type="text" id="cardCode" name="cardCode" value={documentData.cardCode} onChange={handleInputChange} className="border rounded-md p-2 w-full" />
                        </div>

                        <div>
                            <label htmlFor="cardName" className="font-bold">Card Name:</label>
                            <input type="text" id="cardName" name="cardName" value={documentData.cardName} onChange={handleInputChange} className="border rounded-md p-2 w-full" />
                        </div>

                        <div>
                            <label htmlFor="docDate" className="font-bold">Document Date:</label>
                            <input type="date" id="docDate" name="docDate" value={documentData.docDate} onChange={handleInputChange} className="border rounded-md p-2 w-full" />
                        </div>

                        <div>
                            <label htmlFor="docTotal" className="font-bold">Document Total:</label>
                            <input type="number" id="docTotal" name="docTotal" value={documentData.docTotal} onChange={handleInputChange} className="border rounded-md p-2 w-full" />
                        </div>

                        <div>
                            <label htmlFor="docStatus" className="font-bold">Document Status:</label>
                            <input type="text" id="docStatus" name="docStatus" value={documentData.docStatus} onChange={handleInputChange} className="border rounded-md p-2 w-full" />
                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Enregistrer les changements
                </button>
            </form>
        </div>
    );
};

export default EditDocument;
