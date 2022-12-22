import data from './../data.json'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

data.map((el,i)=>el['id']=i+1)
console.log(data.map(el=>Object.values(el)[0]))
const columns = [
  { field: 'id', headerName: 'id', width: 150 },
  { field: 'Date', headerName: 'Date', width: 150 },
  { field: 'Price', headerName: 'Price', width: 150 },
  {
    field: 'Volume',
    headerName: 'Volume',
    type:'number',
    width: 200,
  },
];
export default function Table() {
  return (
    <>
    <div style={{ height: '1040px', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={18}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
     </div>
 </>
  );
}