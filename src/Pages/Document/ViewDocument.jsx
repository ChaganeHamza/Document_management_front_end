import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Layout/Components/Spinner';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ViewDocument = () => {
    const { id } = useParams();
    // const location = useLocation();
    const [document, setDocument] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const query = useQuery();
    const table = query.get('table');
    console.log(table);

    useEffect(() => {
        const fetchViewDocument = async () => {
            if (!id) {
                setError("Document ID is missing.");
                setLoading(false);
                return;
            }

            if (!table) {
                setError("Table parameter is missing.");
                setLoading(false);
                return;
            }

            try {
                const url = `http://localhost:5197/api/sap/getDocumentById?id=${table}${id}`;
                console.log('Fetching URL:', url);
                const response = await axios.get(url);
                const contentType = response.headers['content-type'];

                if (response.status !== 200) {
                    const errorDetail = response.data;
                    console.log('Error Response:', errorDetail);
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                if (contentType && contentType.includes("application/json")) {
                    const data = response.data;
                    console.log('JSON Data:', data);
                    setDocument(data);
                } else {
                    const text = response.data;
                    console.log('Non-JSON Response:', text);
                    throw new Error("Received non-JSON response");
                }
            } catch (error) {
                console.error('Error fetching document:', error.message);
                setError(error.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchViewDocument();
    }, [id, table]); // Ajout de 'table' à la liste des dépendances
    if (loading) {
        return (
            <div className="mb-12 opacity-45 py-10">
                <Spinner />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">{`Error: ${error}`}</div>;
    }

    return (
        <div className="p-4">
            {document ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Détails du Document</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Première colonne */}
                        <div className="col-span-1">
                            <div className="space-y-2">
                                <p className="text-sm"><strong>Numéro du Document :</strong> {document.docNum}</p>
                                <p className="text-sm"><strong>Code Client :</strong> {document.cardCode}</p>
                                <p className="text-sm"><strong>Nom du Client :</strong> {document.cardName}</p>
                                <p className="text-sm"><strong>Date :</strong> {new Date(document.docDate).toLocaleDateString()}</p>
                                <p className="text-sm"><strong>Montant Total :</strong> {document.docTotal?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Entrée du Document :</strong> {document.docEntry}</p>
                                <p className="text-sm"><strong>Status du Document :</strong> {document.docStatus}</p>
                                <p className="text-sm"><strong>Adresse :</strong> {document.address}</p>
                                <p className="text-sm"><strong>Numéro sur la Carte :</strong> {document.numAtCard}</p>
                                <p className="text-sm"><strong>Pourcentage de TVA :</strong> {document.vatPercent}</p>
                                <p className="text-sm"><strong>Montant de TVA :</strong> {document.vatSum?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Montant de TVA en devise étrangère :</strong> {document.vatSumFC?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Pourcentage de Remise :</strong> {document.discPrcnt}</p>
                                <p className="text-sm"><strong>Montant de Remise :</strong> {document.discSum?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Montant de Remise en devise étrangère :</strong> {document.discSumFC?.toFixed(2)}</p>
                            </div>
                        </div>
                        
                        {/* Deuxième colonne */}
                        <div className="col-span-1">
                            <div className="space-y-2">
                                <p className="text-sm"><strong>Devise du Document :</strong> {document.docCur}</p>
                                <p className="text-sm"><strong>Taux de Change :</strong> {document.docRate}</p>
                                <p className="text-sm"><strong>Total en Devise étrangère :</strong> {document.docTotalFC?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Montant Payé à ce Jour :</strong> {document.paidToDate?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Montant Payé en Devise étrangère :</strong> {document.paidFC?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Bénéfice Brut :</strong> {document.grosProfit?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Bénéfice Brut en Devise étrangère :</strong> {document.grosProfFC?.toFixed(2)}</p>
                                <p className="text-sm"><strong>Référence 1 :</strong> {document.ref1}</p>
                                <p className="text-sm"><strong>Référence 2 :</strong> {document.ref2}</p>
                                <p className="text-sm"><strong>Commentaires :</strong> {document.comments}</p>
                                <p className="text-sm"><strong>Mémo du Journal :</strong> {document.jrnlMemo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">Aucun document trouvé.</p>
            )}
        </div>
    );
    
    
};

export default ViewDocument;
