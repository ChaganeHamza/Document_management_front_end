import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HubConnectionBuilder } from '@microsoft/signalr';
import Table from '../Layout/Components/Table';
import toast, { Toaster } from 'react-hot-toast';

const Document = () => {
  const columns = ['Numéro document', 'Code client', 'Nom client', 'Date document', 'Total document', 'Status'];
  const attributs = ['docNum', 'cardCode', 'cardName', 'docDate', 'docTotal', 'status'];
  //const [alertMessage, setAlertMessage] = useState('');


  const [salesOrders, setSalesOrders] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [salesReturns, setSalesReturns] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [notif, setNotif] = useState();

  let documentHubConnection = new HubConnectionBuilder()
    .withUrl('http://localhost:5197/documentHub')
    .build();

  // documentHubConnection.start();

  documentHubConnection.start()
    .then(() => console.log('Connected to SignalR hub'))
    .catch(err => console.error('Error connecting to hub:', err));

  // connection.on('ReceiveMessage', message => {
  //     console.log('Received message:', message);

  // });



  useEffect(() => {

    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:5197/api/sap/getSalesOrders');
        setSalesOrders(response1.data);

        const response2 = await axios.get('http://localhost:5197/api/sap/getPurchaseOrders');
        setPurchaseOrders(response2.data);

        const response3 = await axios.get('http://localhost:5197/api/sap/getSalesReturns');
        setSalesReturns(response3.data);

        const response4 = await axios.get('http://localhost:5197/api/sap/getDeliveries');
        setDeliveries(response4.data);

        // Establish SignalR connection


        // await documentHubConnection.start();
      } catch (error) {
        console.error('Error fetching data:', error);
      }



    };

    fetchData();

    documentHubConnection.on('ReceiveSalesOrderUpdate', (data) => {
      console.log('Received sales order update:', data);
      setSalesOrders(data);
      // setAlertMessage(`Nouveau document ajouté : ${data.docNum}`);
       //toast.success('You have a new Sale order !');
    });

    documentHubConnection.on('ReceivePurchaseOrderUpdate', (data) => {
      console.log('Received purchase order update:', data);
      setPurchaseOrders(data);
      // setAlertMessage(`Nouveau document ajouté : ${data.docNum}`);
      //toast.success('You have a new Purchase order !');
    });

    documentHubConnection.on('ReceiveSalesReturnUpdate', (data) => {
      console.log('Received sales return update:', data);
      setSalesReturns(data);
      // setAlertMessage(`Nouveau document ajouté : ${data.docNum}`);
     //toast.success('You have a new sale return !');
    });

    documentHubConnection.on('ReceiveDeliveryUpdate', (data) => {
      console.log('Received delivery update:', data);
      setDeliveries(data);
      // setAlertMessage(`Nouveau document ajouté : ${data.docNum}`);
      //toast.success('You have a new deliverable order !');
    });




    // Cleanup on component unmount
    // return () => {
    //   // Ensure to stop SignalR connection when component unmounts
    //   if (documentHubConnection) {
    //     documentHubConnection.off('ReceiveSalesOrderUpdate');
    //     documentHubConnection.off('ReceivePurchaseOrderUpdate');
    //     documentHubConnection.off('ReceiveSalesReturnUpdate');
    //     documentHubConnection.off('ReceiveDeliveryUpdate');
    //     documentHubConnection.stop();
    //   }
    // };
  }, [salesOrders, purchaseOrders, salesReturns, deliveries]); // Empty dependency array means this effect runs only once on component mount



  return (
    <div className="App p-4">
      {/* <button onClick={notify}>Make me a toast</button> */}
      {/* Affichage de l'alerte en fonction des mises à jour reçues */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Commandes de vente</h2>
          <Table columns={columns} data={salesOrders} attributs={attributs} />
        </div>
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Commandes d'achat</h2>
          <Table columns={columns} data={purchaseOrders} attributs={attributs} />
        </div>
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Retours de vente</h2>
          <Table columns={columns} data={salesReturns} attributs={attributs} />
        </div>
        <div className="w-full border p-1 rounded-lg overflow-auto max-h-80">
          <h2 className="text-center text-lg font-semibold mb-2">Livraisons</h2>
          <Table columns={columns} data={deliveries} attributs={attributs} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Document;
