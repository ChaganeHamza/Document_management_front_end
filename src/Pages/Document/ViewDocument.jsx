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
    }, [id, location.search]);

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

    console.log(document);

    return (
        <div className="p-4">
            {document ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Document Details</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p><strong>Numéro du Document:</strong> {document.DocNum}</p>
                            <p><strong>Code Client:</strong> {document.CardCode}</p>
                            <p><strong>Nom du Client:</strong> {document.CardName}</p>
                            <p><strong>Date:</strong> {new Date(document.DocDate).toLocaleDateString()}</p>
                            <p><strong>Montant Total:</strong> {document.DocTotal?.toFixed(2)}</p>
                            <p><strong>Entrée du Document:</strong> {document.DocEntry}</p>
                            <p><strong>Type de Document:</strong> {document.DocType}</p>
                            <p><strong>Annulé:</strong> {document.CANCELED}</p>
                            <p><strong>Écrit à la main:</strong> {document.Handwrtten}</p>
                            <p><strong>Imprimé:</strong> {document.Printed}</p>
                            <p><strong>Statut du Document:</strong> {document.DocStatus}</p>
                            <p><strong>Statut de l'Inventaire:</strong> {document.InvntSttus}</p>
                            <p><strong>Transféré:</strong> {document.Transfered}</p>
                            <p><strong>Type d'Objet:</strong> {document.ObjType}</p>
                            <p><strong>Date d'Échéance:</strong> {new Date(document.DocDueDate).toLocaleDateString()}</p>
                            <p><strong>Adresse:</strong> {document.Address}</p>
                            <p><strong>Numéro à la Carte:</strong> {document.NumAtCard}</p>
                            <p><strong>Pourcentage de TVA:</strong> {document.VatPercent?.toFixed(2)}</p>
                            <p><strong>Somme de TVA:</strong> {document.VatSum?.toFixed(2)}</p>
                            <p><strong>Somme de TVA FC:</strong> {document.VatSumFC?.toFixed(2)}</p>
                            <p><strong>Pourcentage de Remise:</strong> {document.DiscPrcnt?.toFixed(2)}</p>
                            <p><strong>Somme de Remise:</strong> {document.DiscSum?.toFixed(2)}</p>
                            <p><strong>Somme de Remise FC:</strong> {document.DiscSumFC?.toFixed(2)}</p>
                            <p><strong>Devise du Document:</strong> {document.DocCur}</p>
                            <p><strong>Taux du Document:</strong> {document.DocRate?.toFixed(2)}</p>
                            <p><strong>Total du Document FC:</strong> {document.DocTotalFC?.toFixed(2)}</p>
                            <p><strong>Paiement à ce Jour:</strong> {document.PaidToDate?.toFixed(2)}</p>
                            <p><strong>Paiement FC:</strong> {document.PaidFC?.toFixed(2)}</p>
                            <p><strong>Profit Brut:</strong> {document.GrosProfit?.toFixed(2)}</p>
                            <p><strong>Profit Brut FC:</strong> {document.GrosProfFC?.toFixed(2)}</p>
                            <p><strong>Référence 1:</strong> {document.Ref1}</p>
                            <p><strong>Référence 2:</strong> {document.Ref2}</p>
                            <p><strong>Commentaires:</strong> {document.Comments}</p>
                            <p><strong>Journal Memo:</strong> {document.JrnlMemo}</p>
                            <p><strong>ID de Transaction:</strong> {document.TransId}</p>
                            <p><strong>Numéro de Reçu:</strong> {document.ReceiptNum}</p>
                            <p><strong>Numéro de Groupe:</strong> {document.GroupNum}</p>
                            <p><strong>Heure du Document:</strong> {document.DocTime}</p>
                            <p><strong>Code Commercial:</strong> {document.SlpCode}</p>
                            <p><strong>Code de Transport:</strong> {document.TrnspCode}</p>
                            <p><strong>Part Supply:</strong> {document.PartSupply}</p>
                            <p><strong>Confirmé:</strong> {document.Confirmed}</p>
                            <p><strong>Base Brute:</strong> {document.GrossBase}</p>
                            <p><strong>Importé Entité:</strong> {document.ImportEnt}</p>
                            <p><strong>Créé par Transaction:</strong> {document.CreateTran}</p>
                            <p><strong>Type de Sommaire:</strong> {document.SummryType}</p>
                            <p><strong>Mettre à Jour Inventaire:</strong> {document.UpdInvnt}</p>
                            <p><strong>Mettre à Jour Solde Client:</strong> {document.UpdCardBal}</p>
                            <p><strong>Instance:</strong> {document.Instance}</p>
                            <p><strong>Flags:</strong> {document.Flags}</p>
                            <p><strong>Direction Inventaire:</strong> {document.InvntDirec}</p>
                            <p><strong>Code du Contact:</strong> {document.CntctCode}</p>
                            <p><strong>Afficher SCN:</strong> {document.ShowSCN}</p>
                            <p><strong>Carte Parent:</strong> {document.FatherCard}</p>
                            <p><strong>Taux de Change Système:</strong> {document.SysRate?.toFixed(2)}</p>
                            <p><strong>Source de Devise:</strong> {document.CurSource}</p>
                        </div>
                        <div className="space-y-2">
                            <p><strong>Somme de TVA Sy:</strong> {document.VatSumSy?.toFixed(2)}</p>
                            <p><strong>Somme de Remise Sy:</strong> {document.DiscSumSy?.toFixed(2)}</p>
                            <p><strong>Total Document Sy:</strong> {document.DocTotalSy?.toFixed(2)}</p>
                            <p><strong>Paiement Sy:</strong> {document.PaidSys?.toFixed(2)}</p>
                            <p><strong>Type de Parent:</strong> {document.FatherType}</p>
                            <p><strong>Profit Brut Sy:</strong> {document.GrosProfSy?.toFixed(2)}</p>
                            <p><strong>Date de Mise à Jour:</strong> {document.UpdateDate ? new Date(document.UpdateDate).toLocaleDateString() : 'N/A'}</p>
                            <p><strong>Est-ICT:</strong> {document.IsICT}</p>
                            <p><strong>Date de Création:</strong> {document.CreateDate ? new Date(document.CreateDate).toLocaleDateString() : 'N/A'}</p>
                            <p><strong>Volume:</strong> {document.Volume?.toFixed(2)}</p>
                            <p><strong>Unité de Volume:</strong> {document.VolUnit}</p>
                            <p><strong>Poids:</strong> {document.Weight?.toFixed(2)}</p>
                            <p><strong>Unité de Poids:</strong> {document.WeightUnit}</p>
                            <p><strong>Série:</strong> {document.Series}</p>
                            <p><strong>Date de Taxe:</strong> {document.TaxDate ? new Date(document.TaxDate).toLocaleDateString() : 'N/A'}</p>
                            <p><strong>Remplisseur:</strong> {document.Filler}</p>
                            <p><strong>Source de Données:</strong> {document.DataSource}</p>
                            <p><strong>Numéro du Timbre:</strong> {document.StampNum}</p>
                            <p><strong>Est Crin:</strong> {document.isCrin}</p>
                            <p><strong>Période Financière:</strong> {document.FinncPriod}</p>
                            <p><strong>Signature Utilisateur:</strong> {document.UserSign}</p>
                            <p><strong>Auto-Facture:</strong> {document.selfInv}</p>
                            <p><strong>TVA Payée:</strong> {document.VatPaid?.toFixed(2)}</p>
                            <p><strong>TVA Payée FC:</strong> {document.VatPaidFC?.toFixed(2)}</p>
                            <p><strong>TVA Payée Sys:</strong> {document.VatPaidSys?.toFixed(2)}</p>
                            <p><strong>Signature Utilisateur 2:</strong> {document.UserSign2}</p>
                            <p><strong>Statut WDD:</strong> {document.WddStatus}</p>
                            <p><strong>Clé Brouillon:</strong> {document.draftKey}</p>
                            <p><strong>Dépenses Totales:</strong> {document.TotalExpns?.toFixed(2)}</p>
                            <p><strong>Dépenses Totales FC:</strong> {document.TotalExpFC?.toFixed(2)}</p>
                            <p><strong>Dépenses Totales SC:</strong> {document.TotalExpSC?.toFixed(2)}</p>
                            <p><strong>Niveau de Relance:</strong> {document.DunnLevel}</p>
                            <p><strong>Adresse 2:</strong> {document.Address2}</p>
                            <p><strong>Instance de Log:</strong> {document.LogInstanc}</p>
                            <p><strong>Exporté:</strong> {document.Exported}</p>
                            <p><strong>ID de Station:</strong> {document.StationID}</p>
                            <p><strong>Indicateur:</strong> {document.Indicator}</p>
                            <p><strong>Procédé Net:</strong> {document.NetProc}</p>
                            <p><strong>Taxe Aqcs:</strong> {document.AqcsTax?.toFixed(2)}</p>
                            <p><strong>Taxe Aqcs FC:</strong> {document.AqcsTaxFC?.toFixed(2)}</p>
                            <p><strong>Taxe Aqcs SC:</strong> {document.AqcsTaxSC?.toFixed(2)}</p>
                            <p><strong>Pourcentage de Remise en Espèces:</strong> {document.CashDiscPr?.toFixed(2)}</p>
                            <p><strong>Remise en Espèces:</strong> {document.CashDiscnt?.toFixed(2)}</p>
                            <p><strong>Remise en Espèces FC:</strong> {document.CashDiscFC?.toFixed(2)}</p>
                            <p><strong>Remise en Espèces SC:</strong> {document.CashDiscSC?.toFixed(2)}</p>
                            <p><strong>Code de Livraison:</strong> {document.ShipToCode}</p>
                            <p><strong>Numéro de Licence du Commerce:</strong> {document.LicTradNum}</p>
                            <p><strong>Référence de Paiement:</strong> {document.PaymentRef}</p>
                            <p><strong>Somme de W/T:</strong> {document.WTSum?.toFixed(2)}</p>
                            <p><strong>Somme de W/T FC:</strong> {document.WTSumFC?.toFixed(2)}</p>
                            <p><strong>Somme de W/T SC:</strong> {document.WTSumSC?.toFixed(2)}</p>
                            <p><strong>Différence d'Arrondi:</strong> {document.RoundDif?.toFixed(2)}</p>
                            <p><strong>Différence d'Arrondi FC:</strong> {document.RoundDifFC?.toFixed(2)}</p>
                            <p><strong>Check Digit:</strong> {document.CheckDigit}</p>
                            <p><strong>Formulaire 1099:</strong> {document.Form1099}</p>
                            <p><strong>Boîte 1099:</strong> {document.Box1099}</p>
                            <p><strong>Soumis:</strong> {document.Submitted}</p>
                            <p><strong>Total Document:</strong> {document.TotalDocument?.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">No document found.</p>
            )}
        </div>
    );
};

export default ViewDocument;
