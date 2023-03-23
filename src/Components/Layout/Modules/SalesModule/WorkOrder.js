import { Box } from '@mui/system';
import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Card, MenuItem, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

// Tab panel function
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
};



const WorkOrder = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 40,
            type: 'number'
        },
        {
            field: 'WorkOrderNo',
            headerName: 'Work order number',
            width: 150,
            editable: false
        },
        {
            field: 'Work order date',
            headerName: 'Work order date',
            width: 250,
            editable: false
        },
        {
            field: 'client name',
            headerName: 'client name',
            width: 250,
            editable: false
        },
        {
            field: 'Work order value',
            headerName: 'work order value',
            width: 250,
            editable: false
        },
        {
            field: 'actions',
            headerName: 'Action',
            width: 90,
            renderCell: ({ row }) => (
                <Box sx={{ display: "flex" }}>

                    <Link to={`/EditBank/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

                </Box>
            )
        }
    ];

    // Table data fetching function
    const [data, setdata] = React.useState([]);

    // GET API for Bank data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setdata(data))
    });




    // text filed for create work order functionality

    const [data1, setdata1] = React.useState([]);

    // GET API for WorkOrder data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setdata1(data))
    });



    // post API for Add WorkOrder
    const [WorkOrder, setWorkOrder] = React.useState("")
    const [msg, setMsg] = React.useState('');

    const handleEdit = (e) => {
        setWorkOrder({ ...WorkOrder, [e.target.id]: e.target.value });
    };

    const handleWorkOrderAdd = async (e) => {
        e.preventDefault();
        console.log(WorkOrder)
        const responce = await axios.post("https://jsonplaceholder.typicode.com/posts", WorkOrder);

        setMsg(responce.data.msg);
    };

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


    return (
        <Box sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", marginTop: "100px", flexDirection: "column" }}>
            <Box sx={{ width: "80%", marginTop: "80px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Work order list" {...a11yProps(0)} />
                            <Tab label="Create work order" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* 1Tab Body here */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ height: 425, width: '82%' }}>
                            <DataGrid
                                sx={{ backgroundColor: "#eee" }}
                                rows={data}
                                columns={columns}
                                pageSize={6}
                                rowsPerPageOptions={[6]}
                                disableSelectionOnClick
                                experimentalFeatures={{ newEditingApi: true }}
                            />
                        </Box>
                    </Box>
                </TabPanel>


                <TabPanel value={value} index={1}>
                    {/* 2Tab Body here */}
                    <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", textAlign: "center" }}>
                        <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                            <Box sx={{ p: 1 }}>
                                <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Create Work Order</Typography>
                            </Box>
                            <Form onSubmit={handleWorkOrderAdd}>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="Product Name" size="small" onChange={(e) => handleEdit(e)} required={true} label="Product Name *" variant="outlined" />
                                    <TextField id="Product Type" size="small" onChange={(e) => handleEdit(e)} required={true} label="Product Type" variant="outlined" />
                                    <TextField id="Product Category" size="small" onChange={(e) => handleEdit(e)} required={true} label="Product Category" variant="outlined" />
                                    <TextField id="Quantity" size="small" onChange={(e) => handleEdit(e)} label="Quantity" variant="outlined" />
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
                                    <TextField id="Rate" size="small" onChange={(e) => handleEdit(e)} required={true} label="Rate" variant="outlined" />
                                    <TextField id="Total" size="small" onChange={(e) => handleEdit(e)} required={true} label="Total" variant="outlined" />
                                </Box>
                                <Button variant='contained' type="submit">Create</Button>
                            </Form>

                        </Card>
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    )
}

export default WorkOrder;
