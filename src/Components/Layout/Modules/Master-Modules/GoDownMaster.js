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
        field: 'GoDownName',
        headerName: 'GoDown Name',
        width: 250,
        type: 'number',
        editable: false
    },
    {
        field: 'AccountDetails',
        headerName: 'Account Details',
        width: 250,
        editable: false
    },
    {
        field: 'Address',
        headerName: 'Address',
        width: 550,
        editable: false
    },
    {
        field: 'actions',
        headerName: 'Action',
        width: 90,
        renderCell: ({ row }) => (
            <Box sx={{ display: "flex" }}>

                <Link to={`/EditGoDown/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

            </Box>
        )
    }
];



export default function GoDownMaster() {
    const { id } = useParams();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [GoDowndata, setGoDowndata] = React.useState([]);

    // GET API for GoDown data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setGoDowndata(data))
    })



    // post API for Add GoDown
    const [GoDown, setGoDown] = React.useState("")
    const [msg, setMsg] = React.useState('');

    const handleEdit = (e) => {
        setGoDown({ ...GoDown, [e.target.id]: e.target.value });
    };

    const handleGoDownAdd = async (e) => {
        e.preventDefault();
        console.log(GoDown)
        const responce = await axios.post("https://jsonplaceholder.typicode.com/posts", GoDown);

        setMsg(responce.data.msg);
    };



    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: { xs: 7, sm: 8, md: 8, lg: 8, xl: 8 }, marginTop: { xs: 14, sm: 20, md: 20, lg: 24, xl: 26 }, textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="GoDown List" {...a11yProps(0)} />
                        <Tab label="Add GoDown Item" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 }, p: 1 }}>GoDown Product List</Typography>
                {/* GoDown list */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ height: 425, width: '82%' }}>
                        <DataGrid
                            sx={{ backgroundColor: "#eee" }}
                            rows={GoDowndata}
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

                {/* GoDown addition part */}

                <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center" }}>
                    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                        <Box sx={{ p: 1 }}>
                            <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Add New GoDown Item</Typography>
                        </Box>


                        <Form onSubmit={handleGoDownAdd}>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField id="Name" onChange={(e) => handleEdit(e)} required={true} label="Name *"  size="small" variant="outlined" />
                                <TextField id="Address" onChange={(e) => handleEdit(e)} required={true} label="Address *"  size="small" variant="outlined" />
                                <TextField id="Contact Person" onChange={(e) => handleEdit(e)} required={true} label="Contact Person *"  size="small" variant="outlined" />
                                <TextField id="Type" onChange={(e) => handleEdit(e)} required={true} label="Type *"  size="small" variant="outlined" />
                            </Box>

                            <Button variant='contained' type="submit">Add</Button>
                        </Form>

                    </Card>
                </Box>
            </TabPanel>

        </Box>
    );
}




