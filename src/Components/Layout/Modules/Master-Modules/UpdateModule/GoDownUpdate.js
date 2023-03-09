import { Box, Button, Card, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const GoDownUpdate = () => {
    const { id } = useParams();

    const [GoDownEdit, setGoDownEdit] = useState("")
    const [msg, setMsg] = useState('');

    // PATCH API here
    useEffect(() => {
        const Edit = async () => {
            const reqdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const res = reqdata.json();
            setGoDownEdit(await res);
        }

        Edit();
    }, []);


    const handleEdit = (e) => {
        setGoDownEdit({ ...GoDownEdit, [e.target.id]: e.target.value });
    };


    // POST API here
    const handleGoDownUpdate = async (e) => {
        e.preventDefault();
        const responce = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, GoDownEdit);
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
                    <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Update GoDown here</Typography>
                </Box>

                <Form onSubmit={handleGoDownUpdate}>
                    <Box
                        // component="form"
                        sx={{
                            p: 5,
                            '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField id="Name" size="small" onChange={(e) => handleEdit(e)} required={true} label="Name *" variant="outlined" />
                        <TextField id="Address" size="small" onChange={(e) => handleEdit(e)} required={true} label="Address *" variant="outlined" />
                        <TextField id="Contact Person" size="small" onChange={(e) => handleEdit(e)} required={true} label="Contact Person *" variant="outlined" />
                        <TextField id="Type" size="small" onChange={(e) => handleEdit(e)} required={true} label="Type *" variant="outlined" />

                    </Box>
                    <Button variant='contained' type="submit">Submit</Button>
                </Form>

            </Card>
        </Box>
    );
};

export default GoDownUpdate;
