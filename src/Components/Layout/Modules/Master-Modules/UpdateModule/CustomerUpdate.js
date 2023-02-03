import { Box, Button, Card, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const CustomerUpdate = () => {
    const { id } = useParams();

    const [CustomerEdit, setCustomerEdit] = useState({ userId: '', body: '', title: '' })
    const [msg, setMsg] = useState('');

    // PATCH API here
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
        <Box sx={{ display: "flex", height: "100vh", width: "100vw", justifyContent: "center", backgroundColor: "#eee" }}>
            <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "100px", width: "1100px", height: "500px", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
            <Button sx={{mr:120,p:1}} variant="contained" onClick={goBack}><ArrowBackIcon/> Go back</Button>
                <Box sx={{ margin: "50px 0 0" }}>
                    <Typography variant='h3'>Update Customer details here</Typography>
                </Box>

                <Form onSubmit={handleCustomerUpdate}>
                    <Box
                        // component="form"
                        sx={{
                            p: 5,
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField id="userId" label="Name" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.userId} />
                        <TextField id="title" label="Branch" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.title} />
                        <TextField id="body" label="Account Holder" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.body} />
                        <TextField id="userId" label="Account Number" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.userId} />
                        <TextField id="title" label="Address" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.title} />
                        <TextField id="body" label="Branch Code" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.body} />
                        <TextField id="userId" label="IFSC Code" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.userId} />
                        <TextField id="title" label="Swift" onChange={(e) => handleEdit(e)} required={true} variant="outlined" value={CustomerEdit.title} />


                    </Box>
                    <Button variant='contained' type="submit">Update</Button>
                </Form>

            </Card>
        </Box>
    );
};

export default CustomerUpdate;
