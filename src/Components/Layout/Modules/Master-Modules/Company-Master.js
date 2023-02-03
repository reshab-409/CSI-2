import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
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
    width: 300,
    type: 'number',
    editable: false
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 300,
    editable: false
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 320,
    editable: false
  },
  {
    field: 'actions',
    headerName: 'Action',
    width: 70,
    renderCell: ({ row }) => (
      <Box sx={{ display: "flex" }}>

        <Link to={`/EditBank/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

      </Box>
    )
  }
];

const CompanyMaster = () => {

  const [BankEdit, setBankEdit] = useState({ userId: '', body: '', title: '' })
  const [msg, setMsg] = useState('');

  // PATCH API here
  useEffect(() => {
    const Edit = async () => {
      const reqdata = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const res = reqdata.json();
      setBankEdit(await res);
    }
    Edit();
  });



  const [Tabledata, setTabledata] = React.useState([]);

  // GET API for Company data
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTabledata(data))
  })

  return (
    <Box sx={{ marginLeft: "66px" }}>
      <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", backgroundColor: "#eee" }}>
        <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "68px", width: "1300px", height: "100%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
          <Box sx={{ margin: "30px 0 0" }}>
            <Typography variant='h3'>Company Details</Typography>
          </Box>

          {/* <Form onSubmit={handleBankUpdate}> */}
          <Box
            // component="form"
            sx={{
              p: 2,
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >

            <TextField id="UserId" label="Company Name" variant="outlined" value={BankEdit.userId} />
            <TextField id="Title" label="Currency" variant="outlined" value={BankEdit.title} />
            <TextField id="Body" label="Email" variant="outlined" value={BankEdit.body} />
            <TextField id="1" InputProps={{ startAdornment: <InputAdornment position="start">+ 91</InputAdornment>, }} label="Phon Number" variant="outlined" value={BankEdit.userId} />
            <TextField id="2" label="Website" variant="outlined" value={BankEdit.userId} />
            <TextField id="3" label="GST No" variant="outlined" />
            <TextField id="4" label="PAN No" variant="outlined" />
            <TextField id="5" label="Street One" variant="outlined" />
            <TextField id="6" label="Street Two" variant="outlined" />
            <TextField id="7" label="City" variant="outlined" />
            <TextField id="8" label="Pin Code" variant="outlined" />
            <TextField id="9" label="Country" variant="outlined" />
            <TextField id="10" label="State" variant="outlined" />

            <TextField id="11" label="Colour 1" variant="outlined"
            // type="color"
            />
            <TextField id="12" label="Colour 2" variant="outlined"
            // type="color"
            />
          </Box>
          <Button sx={{ width: "30px", marginLeft: "80px" }} variant='contained' type="submit">Edit</Button>
          {/* </Form> */}

          <Box sx={{ display: "flex", justifyContent: "center", p: 2.5 }}>
            <Box sx={{ height: 425, width: '90%' }}>
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
        </Card>
      </Box>
    </Box>
  )
}

export default CompanyMaster
