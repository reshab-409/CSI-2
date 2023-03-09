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
        width: 40,
        type: 'number'
    },
    {
        field: 'Name',
        headerName: 'Name',
        width: 150,
        type: 'number',
        editable: false
    },
    {
        field: 'Contact Person',
        headerName: 'Contact Person',
        width: 150,
        editable: false
    },
    {
        field: 'CP Phone No',
        headerName: 'CP Phone No',
        width: 150,
        editable: false
    },
    {
        field: 'Address',
        headerName: 'Address',
        width: 150,
        editable: false
    },
    {
        field: 'Phone No',
        headerName: 'Phone No',
        width: 150,
        editable: false
    },
    {
        field: 'E-Mail',
        headerName: 'E-Mail',
        width: 150,
        editable: false
    },
    {
        field: 'GESTIN',
        headerName: 'GSTIN',
        width: 150,
        editable: false
    },
    {
        field: 'PAN No',
        headerName: 'PAN No',
        width: 150,
        editable: false
    },
    {
        field: 'Website',
        headerName: 'Website',
        width: 150,
        editable: false
    },
    {
        field: 'Toll Free No',
        headerName: 'Toll Free No',
        width: 150,
        editable: false
    },
    {
        field: 'actions',
        headerName: 'Action',
        width: 90,
        renderCell: ({ row }) => (
            <Box sx={{ display: "flex" }}>

                <Link to={`/EditVendor/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

            </Box>
        )
    }
];



export default function VendorMaster() {
    const { id } = useParams();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [Vendordata, setVendordata] = React.useState([]);

    // GET API for Vendor data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setVendordata(data))
    })



    // post API for Add Vendor
    const [AddUser, setAddUser] = React.useState("")
    const [msg, setMsg] = React.useState('');

    const handleEdit = (e) => {
        setAddUser({ ...AddUser, [e.target.id]: e.target.value });
    };

    const handleVendorAdd = async (e) => {
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
                        <Tab label="Vendor List" {...a11yProps(0)} />
                        <Tab label="Add New Vendor" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 }, p: 1 }}>Vendor List</Typography>
                {/* Vendor list */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ height: 425, width: '82%' }}>
                        <DataGrid
                            sx={{ backgroundColor: "#eee" }}
                            rows={Vendordata}
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

                {/* Vendor addition part */}

                <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center" }}>
                    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                        <Box sx={{ p: 1 }}>
                            <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Add New Vendor</Typography>
                        </Box>


                        <Form onSubmit={handleVendorAdd}>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField id="Vendor Name"  size="small" onChange={(e) => handleEdit(e)} required={true} label="Vendor Name *" variant="outlined" />
                                <TextField id="Contact Person"  size="small" onChange={(e) => handleEdit(e)} required={true} label="Contact Person" variant="outlined" />
                                <TextField id="CP Phone Number"  size="small" onChange={(e) => handleEdit(e)} required={true} InputProps={{ startAdornment: <InputAdornment position="start">+ 91</InputAdornment>, }} label="CP Phone Number" variant="outlined" />
                                <TextField id="Address"  size="small" onChange={(e) => handleEdit(e)} required={true} label="Address" variant="outlined" />
                                <TextField id="Phone No"  size="small" onChange={(e) => handleEdit(e)} label="Phone No" variant="outlined" />
                                <TextField id="E-mail"  size="small" onChange={(e) => handleEdit(e)} required={true} label="E-mail" variant="outlined" />
                                <TextField id="GSTIN No"  size="small" onChange={(e) => handleEdit(e)} required={true} label="GSTIN No" variant="outlined" />
                                <TextField id="PAN No"  size="small" onChange={(e) => handleEdit(e)} required={true} label="PAN No" variant="outlined" />
                                <TextField id="Website"  size="small" onChange={(e) => handleEdit(e)} required={true} label="Website" variant="outlined" />
                                <TextField id="Shipping Address"  size="small" onChange={(e) => handleEdit(e)} required={true} label="Shipping Address" variant="outlined" />



                            </Box>

                            <Button variant='contained' type="submit">Add</Button>
                        </Form>

                    </Card>
                </Box>
            </TabPanel>

        </Box>
    );
}


