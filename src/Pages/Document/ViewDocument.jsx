import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Layout/Components/Spinner';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ViewDocument = () => {
    const { id } = useParams();
    const location = useLocation();
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

            try {
                const url = `https://localhost:44330/api/getDocumentById?id=ORDR${id}`;
                console.log('Fetching URL:', url);
                const response = await axios.get(url);
                const contentType = response.headers['content-type'];

                if (!response.status === 200) {
                    const errorDetail = response.data;
                    console.log('Error Response:', errorDetail);
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                if (contentType && contentType.indexOf("application/json") !== -1) {
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
    }, [id, location.search]);

    if (loading) return <div className="mb-12 opacity-45 py-10">
        <Spinner />
    </div>;
    if (error) return <div>Error: {error}</div>;

    console.log(document);

    return (
        <div className="p-4">
            {document ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Document Details</h1>
                    <p><strong>Document Number:</strong> {document.DocNum}</p>
                    <p><strong>Card Code:</strong> {document.CardCode}</p>
                    <p><strong>Card Name:</strong> {document.CardName}</p>
                    <p><strong>Date:</strong> {new Date(document.DocDate).toLocaleDateString()}</p>
                    <p><strong>Total Amount:</strong> {document.DocTotal.toFixed(2)}</p>
                </div>
            ) : (
                <p>No document found.</p>
            )}
        </div>
    );
};

export default ViewDocument;
