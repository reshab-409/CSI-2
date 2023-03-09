import { Box, Button, Card, MenuItem, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const RawMaterialUpdate = () => {
    const { id } = useParams();

    const [RawMaterialEdit, setRawMaterialEdit] = useState("")
    const [msg, setMsg] = useState('');


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


    // PATCH API here
    useEffect(() => {
        const Edit = async () => {
            const reqdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const res = reqdata.json();
            setRawMaterialEdit(await res);
        }

        Edit();
    }, []);


    const handleEdit = (e) => {
        setRawMaterialEdit({ ...RawMaterialEdit, [e.target.id]: e.target.value });
    };


    // POST API here
    const handleRawMaterialUpdate = async (e) => {
        e.preventDefault();
        const responce = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, RawMaterialEdit);
        setMsg(responce.data.msg);
    };



    //  goto previous page function
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginLeft: "62px" }}>
            <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "100px", width: "1100px", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                <Button sx={{ width: "120px", height: "30px" }} variant="contained" onClick={goBack}><ArrowBackIcon fontSize='small' /> Go back</Button>


                <Box sx={{ p: 1 }}>
                    <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Update Raw Material here</Typography>
                </Box>

                <Form onSubmit={handleRawMaterialUpdate}>
                    <Box
                        // component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField id="Product Type" size='small' onChange={(e) => handleEdit(e)} required={true} label="Product Type *" variant="outlined" />
                        <TextField id="Product Name" size='small'  onChange={(e) => handleEdit(e)} required={true} label="Product Name *" variant="outlined" />
                        <TextField id="Stock" size='small'  onChange={(e) => handleEdit(e)} required={true} label="Stock *" variant="outlined" />
                        <TextField
                            id="Unit"
                            size='small' 
                            select
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
                        <TextField id="Box/Piece" size='small'  onChange={(e) => handleEdit(e)} required={true} label=" Box/Piece *" variant="outlined" />
                        <TextField id="Description" size='small'  onChange={(e) => handleEdit(e)} required={true} multiline maxRows={4} label="Description *" variant="outlined" />
                        <TextField id="HSN" size='small'  onChange={(e) => handleEdit(e)} required={true} label="HSN Code *" variant="outlined" />
                        <TextField id="GST Percentage" size='small'  onChange={(e) => handleEdit(e)} required={true} label="GST Percentage % *" variant="outlined" />
                        <TextField id="Common Disc%" size='small'  onChange={(e) => handleEdit(e)} required={true} label="Common Disc %" variant="outlined" />

                    </Box>
                    <Button variant='contained' type="submit">Submit</Button>
                </Form>

            </Card>
        </Box>
    );
};

export default RawMaterialUpdate;
