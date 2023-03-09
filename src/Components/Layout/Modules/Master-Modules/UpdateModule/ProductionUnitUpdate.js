import { Box, Button, Card, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const ProductionUnitUpdate = () => {
    const { id } = useParams();

    const [ProductionUnitEdit, setProductionUnitEdit] = useState("")
    const [msg, setMsg] = useState('');

    // PATCH API here
    useEffect(() => {
        const Edit = async () => {
            const reqdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const res = reqdata.json();
            setProductionUnitEdit(await res);
        }

        Edit();
    }, []);


    const handleEdit = (e) => {
        setProductionUnitEdit({ ...ProductionUnitEdit, [e.target.id]: e.target.value });
    };


    // POST API here
    const handleProductionUnitUpdate = async (e) => {
        e.preventDefault();
        const responce = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, ProductionUnitEdit);
        setMsg(responce.data.msg);
    };



    //  goto previous page function
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginLeft: "62px" }}>
            <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "100px", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                <Button sx={{ width: "120px", height: "30px" }} variant="contained" onClick={goBack}><ArrowBackIcon fontSize='small' /> Go back</Button>

                <Box sx={{ p: 1 }}>
                    <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Update Production Unit here</Typography>
                </Box>

                <Form onSubmit={handleProductionUnitUpdate}>
                    <Box
                        // component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: { xs: 135, sm: 130, md: 150, lg: 180, xl: 200, } },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField id="ProductionUnit Nmae" label="ProductionUnit Name" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={ProductionUnitEdit.ProductionUnitName} />
                        <TextField id="Account Details" label="Accont Details" size="small" multiline maxRows={4} onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={ProductionUnitEdit.AccountDetails} />
                        <TextField id="Address" label="Address" size="small" multiline maxRows={4} onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={ProductionUnitEdit.Address} />

                    </Box>
                    <Button variant='contained' type="submit">Submit</Button>
                </Form>

            </Card>
        </Box>
    );
};

export default ProductionUnitUpdate;
