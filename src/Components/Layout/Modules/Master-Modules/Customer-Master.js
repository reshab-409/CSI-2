import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import { Button, Card, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Form } from 'semantic-ui-react';
import axios from 'axios';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
        width: 250,
        type: 'number',
        editable: false
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 250,
        editable: false
    },
    {
        field: 'body',
        headerName: 'Body',
        width: 550,
        editable: false
    },
    {
        field: 'actions',
        headerName: 'Action',
        width: 90,
        renderCell: ({ row }) => (
            <Box sx={{ display: "flex" }}>

                <Link to={`/EditCustomer/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

            </Box>
        )
    }
];



export default function CustomerMaster() {
    const { id } = useParams();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [Customerdata, setCustomerdata] = React.useState([]);

    // GET API for Customer data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setCustomerdata(data))
    })



    // post API for Add customer
    const [AddUser, setAddUser] = React.useState("")
    const [msg, setMsg] = React.useState('');

    const handleEdit = (e) => {
        setAddUser({ ...AddUser, [e.target.id]: e.target.value });
    };

    const handleCustomerAdd = async (e) => {
        e.preventDefault();
        console.log(AddUser)
        const responce = await axios.post("https://jsonplaceholder.typicode.com/posts", AddUser);

        setMsg(responce.data.msg);
    };



    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: { xs: 7, sm: 8, md: 8, lg: 8, xl: 8 }, marginTop: { xs: 14, sm: 20, md: 20, lg: 24, xl: 26 }, textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Customer List" {...a11yProps(0)} />
                        <Tab label="Add New Customer" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography variant='h3' sx={{ p: 3 }}>Customer List</Typography>
                {/* customer list */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ height: 425, width: '82%' }}>
                        <DataGrid
                            sx={{ backgroundColor: "#eee" }}
                            rows={Customerdata}
                            columns={columns}
                            pageSize={6}
                            rowsPerPageOptions={[6]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>

                {/* customer addition part */}

                <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center" }}>
                    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "1300px", height: "500px", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                        <Box sx={{ margin: "50px 0 0" }}>
                            <Typography variant='h3'>Add New Customer</Typography>
                        </Box>


                        <Form onSubmit={handleCustomerAdd}>
                            <Box
                                sx={{
                                    p: 5,
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField id="Name" onChange={(e) => handleEdit(e)} required={true} label="Name *" variant="outlined" />
                                <TextField id="PNumber" onChange={(e) => handleEdit(e)} required={true} InputProps={{ startAdornment: <InputAdornment position="start">+ 91</InputAdornment>, }} label="Phone Number" variant="outlined" />
                                <TextField id="Email" onChange={(e) => handleEdit(e)} required={true} label="Email" variant="outlined" />
                                <TextField id="GST No" onChange={(e) => handleEdit(e)} required={true} label="GST No" variant="outlined" />
                                <TextField id="PAN No" onChange={(e) => handleEdit(e)} label="PAN No" variant="outlined" />
                                <TextField id="Street One" onChange={(e) => handleEdit(e)} required={true} label="Street One" variant="outlined" />
                                <TextField id="Street Two" onChange={(e) => handleEdit(e)} required={true} label="Street Two" variant="outlined" />
                                <TextField id="City" onChange={(e) => handleEdit(e)} required={true} label="City" variant="outlined" />
                                <TextField id="Pin Code" onChange={(e) => handleEdit(e)} required={true} label="Pin Code" variant="outlined" />
                                <TextField id="State" onChange={(e) => handleEdit(e)} required={true} label="State" variant="outlined" />
                                <TextField id="Country" onChange={(e) => handleEdit(e)} required={true} label="Country" variant="outlined" />
                                <TextField id="FAX No" onChange={(e) => handleEdit(e)} required={true} label="FAX No" variant="outlined" />
                                <TextField id="Attn" onChange={(e) => handleEdit(e)} required={true} label="Attn" variant="outlined" />
                                <TextField id="Website" onChange={(e) => handleEdit(e)} required={true} label="Website" variant="outlined" />
                                <TextField id="Currency" onChange={(e) => handleEdit(e)} required={true} InputProps={{ startAdornment: <InputAdornment position="start">INR</InputAdornment>, }} label="Currency" variant="outlined" />



                            </Box>

                            <Button variant='contained' type="submit">Add</Button>
                        </Form>

                    </Card>
                </Box>
            </TabPanel>

        </Box>
    );
}

