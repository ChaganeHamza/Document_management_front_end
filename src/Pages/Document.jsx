import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../Layout/Components/Table';



const Document = () => {
  const columns = ['Numéro document', ' Code client', 'Nom client', 'Date document', 'Total document', 'Status'];
  const attributs = ['DocNum', 'CardCode', 'CardName', 'DocDate', 'DocTotal', 'Status'];

  const [SalesOrders, setSalesOrders] = useState([]);
  const [PurchaseOrders, setPurchaseOrders] = useState([]);
  const [SalesReturns, setSalesReturns] = useState([]);
  const [Deliveries, setDeliveries] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://localhost:44330/api/getSalesOrders');
        console.log('Sales Orders Data:', response1.data);
        // Traduction des statuts pour les commandes de vente
        const translatedSalesOrders = response1.data.map(order => ({
          ...order,
        }));
        setSalesOrders(translatedSalesOrders);


        const response2 = await axios.get('https://localhost:44330/api/getPurchaseOrders');
        console.log('Purchase Orders Data:', response2.data);
        // Traduction des statuts pour les commandes d'achat
        const translatedPurchaseOrders = response2.data.map(order => ({
          ...order,
        }));
        setPurchaseOrders(translatedPurchaseOrders);



        const response3 = await axios.get('https://localhost:44330/api/getSalesReturns');
        console.log('Retours de vente:', response3.data);
        // Traduction des statuts pour les retours de vente
        const translatedSalesReturns = response3.data.map(order => ({
          ...order,
        }));
        setSalesReturns(translatedSalesReturns);


        const response4 = await axios.get('https://localhost:44330/api/getDeliveries');
        console.log('Livraisons Data:', response4.data);
        // Traduction des statuts pour les livraisons
        const translatedDeliveries = response4.data.map(order => ({
          ...order,
        }));
        setDeliveries(translatedDeliveries);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Commandes de vente</h2>
          <Table columns={columns} data={SalesOrders} attributs={attributs} />
        </div>
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Commandes d'achat</h2>
          <Table columns={columns} data={PurchaseOrders} attributs={attributs} />
        </div>
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Retours de vente</h2>
          <Table columns={columns} data={SalesReturns} attributs={attributs} />
        </div>
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Livraisons</h2>
          <Table columns={columns} data={Deliveries} attributs={attributs} />
        </div>
      </div>
    </div>
  );
};

export default Document;