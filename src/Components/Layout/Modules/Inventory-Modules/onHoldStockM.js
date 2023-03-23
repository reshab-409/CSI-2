import React from 'react'
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

const OnHoldStockM = () => {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 40,
            type: 'number'
        },
        {
            field: 'Product Type',
            headerName: 'Product Type',
            width: 150,
            editable: false
        },
        {
            field: 'Product Name',
            headerName: 'Product Name',
            width: 150,
            editable: false
        },
        {
            field: 'Godown Name',
            headerName: 'Godown name',
            width: 150,
            editable: false
        },
        {
            field: 'Godown unit',
            headerName: 'Godown Unit',
            width: 200,
            editable: false
        },
        {
            field: 'Rack Number',
            headerName: 'Rack Number',
            width: 150,
            editable: false
        },
        {
            field: 'Quantity',
            headerName: 'Quantity',
            width: 150,
            editable: false
        },
        {
            field: 'Unit',
            headerName: 'Unit',
            width: 150,
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




    const Unit = [
        {
            value: 'Raw',
            label: 'Raw material',
        },
        {
            value: 'Product',
            label: 'Product',
        }
    ];

    const [data, setdata] = React.useState([]);

    // GET API for Bank data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setdata(data))
    })



    return (
        <Box sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", marginTop: "100px", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant='h4' sx={{ marginBottom: "50px" }}>On Hold Stock</Typography>
                <TextField
                    id="Unit"
                    select
                    size="small"
                    defaultValue="Raw"
                    helperText="Please select one"
                >
                    {Unit.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box sx={{ width: "80%", marginTop: "80px" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ height: 425, width: '82%' }}>
                        <DataGrid
                            sx={{ backgroundColor: "#eee" }}
                            rows={data}
                            columns={columns}
                            pageSize={6}
                            rowsPerPageOptions={[6]}
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OnHoldStockM
