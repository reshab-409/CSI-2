import { Box, Button, Card, MenuItem, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const ProductUpdate = () => {
    const { id } = useParams();



    const Unit = [
        {
            value: 'Box',
            label: 'Box',
        },
        {
            value: 'Piece',
            label: 'Piece',
        }
    ];

    const [ProductEdit, setProductEdit] = useState({ userId: '', body: '', title: '' })
    const [msg, setMsg] = useState('');

    // PATCH API here
    useEffect(() => {
        const Edit = async () => {
            const reqdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const res = reqdata.json();
            setProductEdit(await res);
        }

        Edit();
    }, []);


    const handleEdit = (e) => {
        setProductEdit({ ...ProductEdit, [e.target.id]: e.target.value });
    };


    // POST API here
    const handleProductUpdate = async (e) => {
        e.preventDefault();
        const responce = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, ProductEdit);
        setMsg(responce.data.msg);
    };


    // goto previous page function
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginLeft: "62px" }}>
            <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "100px", width: "75vw", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                <Button sx={{ width: "120px", height: "30px" }} variant="contained" onClick={goBack}><ArrowBackIcon fontSize='small' /> Go back</Button>
                <Box sx={{ p: 1 }}>
                    <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Update your Product details here</Typography>
                </Box>

                <Form onSubmit={handleProductUpdate}>
                    <Box
                        // component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField id="Product Type" label="Product Type" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField id="Product Name" label="Product Name" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField id="Stock" size="small" label="Stock" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField
                            id="Unit"
                            select
                            size="small"
                            label="Unit"
                            defaultValue="Box"
                            helperText="Please select Unit"
                        >
                            {Unit.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="Place/Box" size="small" label="Place/Box" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField id="sale Price" size="small" label="Sale Price" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField id="Description" size="small" label="Description" onChange={(e) => handleEdit(e)} required={true} multiline maxRows={4} variant="outlined" />
                        <TextField id="HSN Code" size="small" label="HSN Code" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField id="GST Percentage" size="small" label="GST Percentage" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField id="Purchase Rate" size="small" label="Purchase Rate" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                        <TextField id="Common Disc%" size="small" label="Common Disc%" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />


                    </Box>
                    <Button variant='contained' type="submit">Update</Button>
                </Form>

            </Card>
        </Box>
    );
};

export default ProductUpdate;
