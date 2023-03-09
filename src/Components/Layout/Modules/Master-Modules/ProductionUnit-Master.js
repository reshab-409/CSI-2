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
        field: 'UnitId',
        headerName: 'UnitId',
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

                <Link to={`/EditProductionUnit/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

            </Box>
        )
    }
];



export default function ProductionUnit() {
    const { id } = useParams();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [Productiondata, setProductiondata] = React.useState([]);

    // GET API for Production data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setProductiondata(data))
    })



    // post API for Add Production
    const [AddUnit, setAddUnit] = React.useState("")
    const [msg, setMsg] = React.useState('');

    const handleEdit = (e) => {
        setAddUnit({ ...AddUnit, [e.target.id]: e.target.value });
    };

    const handleProductionAdd = async (e) => {
        e.preventDefault();
        console.log(AddUnit)
        const responce = await axios.post("https://jsonplaceholder.typicode.com/posts", AddUnit);

        setMsg(responce.data.msg);
    };



    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: { xs: 7, sm: 8, md: 8, lg: 8, xl: 8 }, marginTop: { xs: 14, sm: 20, md: 20, lg: 24, xl: 26 }, textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Production List" {...a11yProps(0)} />
                        <Tab label="Add New Production" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 }, p: 1 }}>Production Unit List</Typography>
                {/* Production list */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ height: 425, width: '82%' }}>
                        <DataGrid
                            sx={{ backgroundColor: "#eee" }}
                            rows={Productiondata}
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

                {/* Production addition part */}

                <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center" }}>
                    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                        <Box sx={{ p: 1 }}>
                            <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Add New Production Unit</Typography>
                        </Box>


                        <Form onSubmit={handleProductionAdd}>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField id="Name" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Name *" variant="outlined" />
                                <TextField id="PNumber" onChange={(e) => handleEdit(e)} required={true}  size="small" InputProps={{ startAdornment: <InputAdornment position="start">+ 91</InputAdornment>, }} label="Phone Number" variant="outlined" />
                                <TextField id="Email" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Email" variant="outlined" />
                                <TextField id="GST No" onChange={(e) => handleEdit(e)} required={true}  size="small" label="GST No" variant="outlined" />
                                <TextField id="PAN No" onChange={(e) => handleEdit(e)} label="PAN No"  size="small" variant="outlined" />
                                <TextField id="Street One" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Street One" variant="outlined" />
                                <TextField id="Street Two" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Street Two" variant="outlined" />
                                <TextField id="City" onChange={(e) => handleEdit(e)} required={true}  size="small" label="City" variant="outlined" />
                                <TextField id="Pin Code" onChange={(e) => handleEdit(e)} required={true} size="small" label="Pin Code" variant="outlined" />
                                <TextField id="State" onChange={(e) => handleEdit(e)} required={true}  size="small" label="State" variant="outlined" />
                                <TextField id="Country" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Country" variant="outlined" />
                                <TextField id="FAX No" onChange={(e) => handleEdit(e)} required={true}  size="small" label="FAX No" variant="outlined" />
                                <TextField id="Attn" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Attn" variant="outlined" />
                                <TextField id="Website" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Website" variant="outlined" />
                                <TextField id="Currency" onChange={(e) => handleEdit(e)} required={true}  size="small" InputProps={{ startAdornment: <InputAdornment position="start">INR</InputAdornment>, }} label="Currency" variant="outlined" />



                            </Box>

                            <Button variant='contained' type="submit">Add</Button>
                        </Form>

                    </Card>
                </Box>
            </TabPanel>

        </Box>
    );
}


