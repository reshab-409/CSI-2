import { Box, Button, Card, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const BankUpdate = () => {
    const { id } = useParams();

    const [BankEdit, setBankEdit] = useState({ userId: '', body: '', title: '' })
    const [msg, setMsg] = useState('');

    // PATCH API here
    useEffect(() => {
        const Edit = async () => {
            const reqdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const res = reqdata.json();
            setBankEdit(await res);
        }

        Edit();
    }, []);


    const handleEdit = (e) => {
        setBankEdit({ ...BankEdit, [e.target.id]: e.target.value });
    };


    // POST API here
    const handleBankUpdate = async (e) => {
        e.preventDefault();
        const responce = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, BankEdit);
        setMsg(responce.data.msg);
    };



    //  goto previous page function
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box sx={{ height: "100vh", width: "100vw" }}>
            <Box sx={{ display: "flex", justifyContent: "center", marginLeft: "62px" }}>
                <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "100px", width: "1100px", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                    <Button sx={{ width: "120px", height: "30px" }} variant="contained" onClick={goBack}><ArrowBackIcon fontSize='small' /> Go back</Button>


                    <Box sx={{ p: 1 }}>
                        <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Update your bank details here</Typography>
                    </Box>

                    <Form onSubmit={handleBankUpdate}>
                        <Box
                            // component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField id="userId" label="Name" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={BankEdit.userId} />
                            <TextField id="title" label="Branch" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                            <TextField id="body" label="Account Holder" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                            <TextField id="userId" label="Account Number"  size="small"onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                            <TextField id="title" label="Address" size="small" multiline maxRows={4} onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                            <TextField id="body" label="Branch Code" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                            <TextField id="userId" label="IFSC Code" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />
                            <TextField id="title" label="Swift" size="small" onChange={(e) => handleEdit(e)} required={true} variant="outlined" />


                        </Box>
                        <Button variant='contained' type="submit">Submit</Button>
                    </Form>

                </Card>
            </Box>
        </Box>
    );
};

export default BankUpdate;
