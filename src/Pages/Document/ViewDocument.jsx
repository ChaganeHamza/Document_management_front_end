import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDocument = () => {
    const { id } = useParams();
    const [document, setDocument] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchViewDocument = async () => {
            try {
                const response = await fetch(`/api/getDocumentById?id=${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDocument(data);
            } catch (error) {
                setError(error.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchViewDocument();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
                    {/* Add more fields as necessary */}
                </div>
            ) : (
                <p>No document found.</p>
            )}
        </div>
    );
};

export default ViewDocument;
