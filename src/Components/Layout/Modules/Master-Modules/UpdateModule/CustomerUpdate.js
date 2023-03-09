import { Box, Button, Card, Typography, Grid } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DataGrid } from '@mui/x-data-grid';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const CustomerUpdate = () => {
    const { id } = useParams();

    const columns = [
        {
            field: 'Address',
            headerName: 'Address List',
            width: 560
        }
    ];
    const column1 = [
        {
            field: 'Bank',
            headerName: 'Bank List',
            width: 560
        }
    ];

    const [CustomerEdit, setCustomerEdit] = useState({ userId: '', body: '', title: '' })
    const [msg, setMsg] = useState('');

    // fetch API here
    useEffect(() => {
        const Edit = async () => {
            const reqdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const res = reqdata.json();
            setCustomerEdit(await res);
        }

        Edit();
    }, []);


    const handleEdit = (e) => {
        setCustomerEdit({ ...CustomerEdit, [e.target.id]: e.target.value });
    };


    // POST API here
    const handleCustomerUpdate = async (e) => {
        e.preventDefault();
        const responce = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, CustomerEdit);
        setMsg(responce.data.msg);
    };


    // goto previous page function
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box sx={{ marginLeft: "62px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "70px", width: "75vw", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                        <Button sx={{ width: "120px", height: "30px" }} variant="contained" onClick={goBack}><ArrowBackIcon fontSize='small' /> Go back</Button>
                        <Box sx={{ p: 1 }}>
                            <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Update Customer details here</Typography>
                        </Box>

                        <Form onSubmit={handleCustomerUpdate}>
                            <Box
                                // component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField id="userId" size="small" label="Clint Name" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.userId} />
                                <TextField id="title" size="small" label="Contact Person" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="body" size="small" label="CP Phone No" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="userId" size="small" label="Address" multiline maxRows={2} onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="title" size="small" label="Phone No" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="body" size="small" label="E-Mail" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="userId" size="small" label="GSTIN No" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="title" size="small" label="PAN No" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="title" size="small" label="Website" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                <TextField id="title" size="small" label="Shipping Address" multiline maxRows={2} onChange={(e) => handleEdit(e)} required={true} variant="outlined" />

                            </Box>
                            <Button variant='contained' type="submit" >Update</Button>
                        </Form>

                    </Card>



                    <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "16.5px", width: "75vw", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                        <Box sx={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap" }}>


                            <Card sx={{ width: "50%", minWidth: "272px" }}>
                                <Box sx={{ p: 1 }}>
                                    <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Update Bank Details</Typography>
                                </Box>

                                <Form onSubmit={handleCustomerUpdate}>
                                    <Box
                                        // component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="userId" size="small" label="Bank Name" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="title" size="small" label="Account Holder" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="body" size="small" label="Account No" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="userId" size="small" label="Branch Name" multiline maxRows={2} onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="title" size="small" label="IFSC Code No" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                    </Box>
                                    <Button variant='contained' type="submit" >Update</Button>
                                </Form>
                                <Box sx={{ height: 200, width: '100%' }}>
                                    <DataGrid
                                        sx={{ backgroundColor: "#eee" }}
                                        rows={CustomerEdit}
                                        columns={column1}
                                        pageSize={2}
                                        rowsPerPageOptions={[2]}
                                        checkboxSelection
                                        disableSelectionOnClick
                                        experimentalFeatures={{ newEditingApi: true }}
                                    />
                                </Box>
                            </Card>



                            <Card sx={{ width: "50%", minWidth: "272px" }}>
                                <Box sx={{ p: 1 }}>
                                    <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Add Address</Typography>
                                </Box>

                                <Form onSubmit={handleCustomerUpdate}>
                                    <Box
                                        // component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="Address" size="small" label="Address" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="Street One" size="small" label="Street Two" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="Street Two" size="small" label="Street Two" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="State" size="small" label="State" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                        <TextField id="Country" size="small" label="Country" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                                    </Box>
                                    <Button variant='contained' type="submit" >Add</Button>
                                </Form>
                                {/* Address Table */}
                                <Box sx={{ height: 200, width: '100%' }}>
                                    <DataGrid
                                        sx={{ backgroundColor: "#eee" }}
                                        rows={CustomerEdit}
                                        columns={columns}
                                        pageSize={2}
                                        rowsPerPageOptions={[2]}
                                        checkboxSelection
                                        disableSelectionOnClick
                                        experimentalFeatures={{ newEditingApi: true }}
                                    />
                                </Box>
                            </Card>
                        </Box>
                    </Card>
                </Grid>
            </Box>
        </Box>
    );
};

export default CustomerUpdate;
