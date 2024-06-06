import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../Layout/Components/Table';

const SalesReturns = (props) => {
  const columns = ['Numéro de document', ' Code du client', 'Nom du client', 'Date du document', 'DTotal du document'];
  const attributs = ['DocNum', 'CardCode', 'CardName', 'DocDate', 'DocTotal'];

  const [SalesReturns, setSalesReturns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // État pour la requête de recherche

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response1 = await axios.get('https://localhost:44330/api/getSalesReturns');
              console.log('Sales Orders Data:', response1.data);
              setSalesReturns(response1.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  // Fonction pour filtrer les données basée sur la recherche
  const filteredData = searchTerm.length === 0 ? SalesReturns : SalesReturns.filter(order =>
      columns.some(column =>
          order[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
      <div className="w-full border p-1 rounded-lg overflow-auto">
          <h2 className="text-center text-lg font-semibold mb-2">Commandes de vente</h2>
          <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="mb-4 p-2 border rounded"
          />
          <Table columns={columns} data={filteredData} attributs={attributs} />
      </div>
  );
};

export default SalesReturns;