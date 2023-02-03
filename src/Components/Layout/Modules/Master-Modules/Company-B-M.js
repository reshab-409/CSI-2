import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    type: 'number'
  },
  {
    field: 'userId',
    headerName: 'UserId',
    width: 250,
    type: 'number',
    editable: false
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    editable: false
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 550,
    editable: false
  },
  {
    field: 'actions',
    headerName: 'Action',
    width: 90,
    renderCell: ({ row }) => (
      <Box sx={{ display: "flex" }}>

        <Link to={`/EditBank/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

      </Box>
    )
  }
];



export default function ComBM() {

  const [Tabledata, setTabledata] = React.useState([]);

  // GET API for Bank data
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTabledata(data))
  })

  return (
    <Box sx={{display:"flex",flexDirection:"column", marginLeft: { xs: 7, sm: 8, md: 8, lg: 8, xl: 8 }, marginTop: { xs: 14, sm: 20, md: 20, lg: 24, xl: 26 } ,textAlign:"center" }}>
       <Typography variant='h3' sx={{p:3}}>Bank Account List</Typography>
      
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ height: 425, width: '80%' }}>
          <DataGrid
            sx={{ backgroundColor: "#eee" }}
            rows={Tabledata}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[6]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Box>
    </Box>
  );
}








