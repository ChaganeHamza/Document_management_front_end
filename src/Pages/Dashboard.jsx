import React from 'react';
import Table from '../Layout/Components/Table';

const Dashboard = () => {
  const columns = ['Supplier Code', 'Supplier Name', 'Invoice Number', 'Invoice Date', 'Due Date', 'Net Amount'];
  const attributs = ['supplier_code', 'supplier_name', 'invoice_number', 'invoice_date', 'due_date', 'net_amount'];

  const dataCategory1 = [
    { supplier_code: 'UPS5005', supplier_name: 'UPS', invoice_number: 'ASDF19218', invoice_date: '06/25/2016', due_date: '12/25/2016', net_amount: '$8,322.12' },
    { supplier_code: 'UPS3449', supplier_name: 'UPS South Inc.', invoice_number: 'ASDF29301', invoice_date: '06/24/2016', due_date: '12/25/2016', net_amount: '$3,255.49' },
    { supplier_code: 'BOX5599', supplier_name: 'BOX Pro West', invoice_number: 'ASDF43000', invoice_date: '06/27/2016', due_date: '12/25/2016', net_amount: '$45,255.49' },
    { supplier_code: 'PAN9999', supplier_name: 'Pan Providers and Co.', invoice_number: 'ASDF33433', invoice_date: '06/29/2016', due_date: '12/25/2016', net_amount: '$12,335.69' },
  ];

  const dataCategory2 = [
    { supplier_code: 'UPS5005', supplier_name: 'UPS', invoice_number: 'ASDF19218', invoice_date: '06/25/2016', due_date: '12/25/2016', net_amount: '$8,322.12' },
    { supplier_code: 'UPS3449', supplier_name: 'UPS South Inc.', invoice_number: 'ASDF29301', invoice_date: '06/24/2016', due_date: '12/25/2016', net_amount: '$3,255.49' },
    { supplier_code: 'BOX5599', supplier_name: 'BOX Pro West', invoice_number: 'ASDF43000', invoice_date: '06/27/2016', due_date: '12/25/2016', net_amount: '$45,255.49' },
    { supplier_code: 'PAN9999', supplier_name: 'Pan Providers and Co.', invoice_number: 'ASDF33433', invoice_date: '06/29/2016', due_date: '12/25/2016', net_amount: '$12,335.69' },
  ];

  const dataCategory3 = [
    { supplier_code: 'UPS5005', supplier_name: 'UPS', invoice_number: 'ASDF19218', invoice_date: '06/25/2016', due_date: '12/25/2016', net_amount: '$8,322.12' },
    { supplier_code: 'UPS3449', supplier_name: 'UPS South Inc.', invoice_number: 'ASDF29301', invoice_date: '06/24/2016', due_date: '12/25/2016', net_amount: '$3,255.49' },
    { supplier_code: 'BOX5599', supplier_name: 'BOX Pro West', invoice_number: 'ASDF43000', invoice_date: '06/27/2016', due_date: '12/25/2016', net_amount: '$45,255.49' },
    { supplier_code: 'PAN9999', supplier_name: 'Pan Providers and Co.', invoice_number: 'ASDF33433', invoice_date: '06/29/2016', due_date: '12/25/2016', net_amount: '$12,335.69' },
  ];

  const dataCategory4 = [
    { supplier_code: 'UPS5005', supplier_name: 'UPS', invoice_number: 'ASDF19218', invoice_date: '06/25/2016', due_date: '12/25/2016', net_amount: '$8,322.12' },
    { supplier_code: 'UPS3449', supplier_name: 'UPS South Inc.', invoice_number: 'ASDF29301', invoice_date: '06/24/2016', due_date: '12/25/2016', net_amount: '$3,255.49' },
    { supplier_code: 'BOX5599', supplier_name: 'BOX Pro West', invoice_number: 'ASDF43000', invoice_date: '06/27/2016', due_date: '12/25/2016', net_amount: '$45,255.49' },
    { supplier_code: 'PAN9999', supplier_name: 'Pan Providers and Co.', invoice_number: 'ASDF33433', invoice_date: '06/29/2016', due_date: '12/25/2016', net_amount: '$12,335.69' },
  ];

  return (
    <div className="App p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full md:w-auto border p-1 rounded-lg">
          <h2 className="text-center text-lg font-semibold mb-2">Transfert En Cours</h2>
          <Table columns={columns} data={dataCategory1} attributs={attributs} />
        </div>
        <div className="w-full md:w-auto border p-1 rounded-lg">
          <h2 className="text-center text-lg font-semibold mb-2">Retour Client</h2>
          <Table columns={columns} data={dataCategory2} attributs={attributs} />
        </div>
        <div className="w-full md:w-auto border p-1 rounded-lg">
          <h2 className="text-center text-lg font-semibold mb-2">TCommande</h2>
          <Table columns={columns} data={dataCategory3} attributs={attributs} />
        </div>
        <div className="w-full md:w-auto border p-1 rounded-lg">
          <h2 className="text-center text-lg font-semibold mb-2">Retour Fournisseur</h2>
          <Table columns={columns} data={dataCategory4} attributs={attributs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
