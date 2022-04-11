import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'companyName', headerName: 'Company Name' },
  { field: 'expireDate', headerName: 'Expire Date' },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
  },
  {
    field: 'rawFormat',
    headerName: 'Raw Format',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'view',
    headerName: '',
  },
  {
    field: 'download',
    headerName: '',
  },
];

const rows = [
  {
    id: 1,
    companyName: 'Facebook Inc.',
    expireDate: '2022/4/12',
    amount: 20,
    rawFormat: 'txt',
    view: 'View',
    download: 'Download',
  },
  {
    id: 1,
    companyName: 'Facebook Inc.',
    expireDate: '2022/4/12',
    amount: 20,
    rawFormat: 'txt',
    view: 'View',
    download: 'Download',
  }, {
    id: 1,
    companyName: 'Facebook Inc.',
    expireDate: '2022/4/12',
    amount: 20,
    rawFormat: 'txt',
    view: 'View',
    download: 'Download',
  }, {
    id: 1,
    companyName: 'Facebook Inc.',
    expireDate: '2022/4/12',
    amount: 20,
    rawFormat: 'txt',
    view: 'View',
    download: 'Download',
  }, {
    id: 1,
    companyName: 'Facebook Inc.',
    expireDate: '2022/4/12',
    amount: 20,
    rawFormat: 'txt',
    view: 'View',
    download: 'Download',
  }, {
    id: 1,
    companyName: 'Facebook Inc.',
    expireDate: '2022/4/12',
    amount: 20,
    rawFormat: 'txt',
    view: 'View',
    download: 'Download',
  }, {
    id: 1,
    companyName: 'Facebook Inc.',
    expireDate: '2022/4/12',
    amount: 20,
    rawFormat: 'txt',
    view: 'View',
    download: 'Download',
  },

];

export default function ContractDataTable() {
  return (
    <div style={{ paddingTop: '20px', width: '100%', height: '400px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
