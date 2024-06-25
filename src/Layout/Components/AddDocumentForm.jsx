import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const DocumentForm = () => {
    const query = useQuery();
    const table = query.get('table');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        docEntry: '',
        docNum: '',
        cardCode: '',
        cardName: '',
        docDate: '',
        docTotal: '',
        docStatus: '',
        address: '',
        numAtCard: '',
        vatPercent: '',
        vatSum: '',
        jrnlMemo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5197/api/sap/addDocument/${table}`, formData);
            console.log(response.data);
            // Optionnel: Réinitialiser le formulaire après la soumission
            setFormData({
                docEntry: '',
                docNum: '',
                cardCode: '',
                cardName: '',
                docDate: '',
                docTotal: '',
                docStatus: '',
                address: '',
                numAtCard: '',
                vatPercent: '',
                vatSum: '',
                jrnlMemo: ''
            });
            toast.success('Document ajouté avec succès!', {
                position: "top-center"
            });
             // Rediriger vers la page précédente après un court délai pour permettre à la Toast de s'afficher
            setTimeout(() => {
                navigate(-1); // Redirige vers la page précédente
            }, 2000);
        } catch (error) {
            console.error('There was an error posting the document!', error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="space-y-8 p-6 bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Première colonne */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Entrée du Document</label>
                        <input
                            type="text"
                            name="docEntry"
                            value={formData.docEntry}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                           // disabled // Champ désactivé
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Numéro du Document</label>
                        <input
                            type="text"
                            name="docNum"
                            value={formData.docNum}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Code Client</label>
                        <input
                            type="text"
                            name="cardCode"
                            value={formData.cardCode}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nom du Client</label>
                        <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            name="docDate"
                            value={formData.docDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Montant Total</label>
                        <input
                            type="number"
                            step="0.01"
                            name="docTotal"
                            value={formData.docTotal}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>
                </div>

                {/* Deuxième colonne */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status du Document</label>
                        <input
                            type="text"
                            name="docStatus"
                            value={formData.docStatus}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Adresse</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Numéro sur la Carte</label>
                        <input
                            type="text"
                            name="numAtCard"
                            value={formData.numAtCard}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Pourcentage de TVA</label>
                        <input
                            type="number"
                            step="0.01"
                            name="vatPercent"
                            value={formData.vatPercent}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Montant de TVA</label>
                        <input
                            type="number"
                            step="0.01"
                            name="vatSum"
                            value={formData.vatSum}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Memo du Journal</label>
                        <input
                            type="text"
                            name="jrnlMemo"
                            value={formData.jrnlMemo}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                        />
                    </div>

                </div>
            </div>
            <button
                type="submit"
                className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Soumettre
            </button>
        </form>
        <ToastContainer />
    </>
    );
};

export default DocumentForm;
