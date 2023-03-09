import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';


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

  const [CompanyEdit, setCompanyEdit] = useState({ userId: '', body: '', title: '' })
  const [msg, setMsg] = useState('');

  // PATCH API here
  useEffect(() => {
    const Edit = async () => {
      const reqdata = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const res = reqdata.json();
      setCompanyEdit(await res);
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
    <Box sx={{ marginLeft: "62px" }}>
      <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center" }}>
        <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "68px", width: "1300px", height: "100%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
          <Box sx={{ p: 1 }}>
            <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Company Details</Typography>
          </Box>

          <Form >
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
              }}
              noValidate
              autoComplete="off"
            >

              <TextField id="UserId"  size="small" label="Company Name" variant="outlined" value={CompanyEdit.userId} />
              <TextField id="Title"  size="small" label="Currency" variant="outlined" value={CompanyEdit.title} />
              <TextField id="Body" size="small" label="Email" variant="outlined" value={CompanyEdit.body} />
              <TextField id="PNumber" size="small" InputProps={{ startAdornment: <InputAdornment position="start">+ 91</InputAdornment>, }} label="Phone Number" variant="outlined" value={CompanyEdit.userId} />
              <TextField id="Website" size="small" label="Website" variant="outlined" value={CompanyEdit.userId} />
              <TextField id="GST" size="small" label="GST No" variant="outlined" />
              <TextField id="PAN" size="small" label="PAN No" variant="outlined" />
              <TextField id="StreetOne" size="small" label="Street One" variant="outlined" />
              <TextField id="StreetTwo" size="small" label="Street Two" variant="outlined" />
              <TextField id="City" size="small" label="City" variant="outlined" />
              <TextField id="Pin" size="small" label="Pin Code" variant="outlined" />
              <TextField id="Country" size="small" label="Country" variant="outlined" />
              <TextField id="State" size="small" label="State" variant="outlined" />

              <TextField id="Colour1" size="small" label="Colour 1" variant="outlined"
              // type="color"
              />
              <TextField id="Colour2" size="small" label="Colour 2" variant="outlined"
              // type="color"
              />
            </Box>
            <Button sx={{ width: "30px" }} variant='contained' type="submit">Edit</Button>
          </Form>

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
