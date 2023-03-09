import React, { useState } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import P1 from '../Assets/P1.jpg';
import axios from 'axios';
import { authActions } from '../Store/Auth-Slice';
import { useDispatch } from 'react-redux';

function Auth() {
    // useForm usage for login page
    const { register, handleSubmit, formState: { errors } } = useForm();

    // login page error state setting
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    // login page return function
    const Login = () => {
        return (
            <>
                <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "70px", marginTop: "50px" }}>
                    <Typography sx={{ letterSpacing: "1px" }} variant='h4'>Log in here.</Typography>
                </Box>

                <Divider />
                <Form onSubmit={handleSubmit(onSubmitForLoginPage)}>
                    <Box spacing={2} sx={{ textAlign: "center", marginTop: "70px" }}>

                        {error && <Typography sx={{ fontSize: "12px" }} color="red">{error}</Typography>}
                        {errors.email && !error && <Typography sx={{ fontSize: "12px" }} color="red">Please check the Email</Typography>}
                        <Grid spacing={2} sx={{ width: "350px" }}>
                            <Box sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    {...register("email",
                                        {
                                            required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                />
                            </Box>
                        </Grid>
                        <Grid sx={{ width: "350px" }}>
                            <Box sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    {...register("password")}
                                />
                            </Box>
                        </Grid>

                        <Box>
                            <Button sx={{ marginTop: "20px" }} variant='contained' type="submit">Login</Button>
                        </Box>
                    </Box>
                </Form>
            </>
        );
    };


    // onsubmit function for login page
    const onSubmitForLoginPage = (data) => {
        axios.post('http://localhost:4001/login', data).then((res) => {
            window.localStorage.setItem("IniIn", true);
            dispatch(authActions.Login());

        }).catch(() => {

            setError("Email or Password is incorrect");

        });
    };


    return (
        // main interface
        <Box>
            <>
                <Box sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#eee"
                }}>
                    <Card sx={{
                        height: "600px",
                        width: "1000px",
                        backgroundColor: "#fff",
                        position: "relative",
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                        }}>
                            {/* image will be left side */}

                            <Box sx={{
                                width: "50%",
                                backgroundColor: "#fff",
                                height: "100%",
                                overflow: "hidden"
                            }}>
                                <img style={{
                                    boxSizing: "border-box",
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%"
                                }} src={P1} alt="pic here" />

                            </Box>
                            {/* form will be right side */}
                            <Card sx={{
                                width: "50%",
                                backgroundColor: "#fff",
                                height: "100%",
                                padding: "20px",

                            }}>

                                <Login />

                            </Card>
                        </Box>
                    </Card>
                </Box>
            </>
        </Box>
    );
}
export default Auth;