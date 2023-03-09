import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import { Button, Card, MenuItem, Typography } from '@mui/material'
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


const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 20,
        type: 'number'
    },
    {
        field: 'ProductName',
        headerName: 'Product Name',
        width: 300,
        type: 'number'
    },
    {
        field: 'Description',
        headerName: 'Product Description',
        width: 150,
        type: 'number',
        editable: false
    },
    {
        field: 'HSN/SAC',
        headerName: 'HSN/SAC',
        width: 150,
        editable: false
    },
    {
        field: 'GST%',
        headerName: 'GST%',
        width: 150,
        editable: false
    },
    {
        field: 'Purchase Rate',
        headerName: 'Purchase Rate',
        width: 150,
        editable: false
    },
    {
        field: 'Sale Price',
        headerName: 'Sale Price',
        width: 150,
        editable: false
    },
    {
        field: 'C. Disc%',
        headerName: 'C. Disc%',
        width: 150,
        editable: false
    },
    {
        field: 'Stock',
        headerName: 'Stock',
        width: 150,
        editable: false
    },
    {
        field: 'Unit',
        headerName: 'Unit',
        width: 150,
        editable: false
    },
    {
        field: 'Pieces/Unit',
        headerName: 'Pieces/Unit',
        width: 150,
        editable: false
    },
    {
        field: 'actions',
        headerName: 'Action',
        width: 90,
        renderCell: ({ row }) => (
            <Box sx={{ display: "flex" }}>

                <Link to={`/EditRawMaterial/${row.id}`}> <Button><CreateIcon sx={{ mr: 2, cursor: "pointer", color: "grey" }} /></Button></Link>

            </Box>
        )
    }
];



export default function RawMaterialMaster() {
    const { id } = useParams();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [RawMaterialdata, setRawMaterialdata] = React.useState([]);

    // GET API for RawMaterial data
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setRawMaterialdata(data))
    })



    // post API for Add RawMaterial
    const [RawMaterial, setRawMaterial] = React.useState("")
    const [msg, setMsg] = React.useState('');

    const handleEdit = (e) => {
        setRawMaterial({ ...RawMaterial, [e.target.id]: e.target.value });
    };

    const handleRawMaterialAdd = async (e) => {
        e.preventDefault();
        console.log(RawMaterial)
        const responce = await axios.post("https://jsonplaceholder.typicode.com/posts", RawMaterial);

        setMsg(responce.data.msg);
    };



    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: { xs: 7, sm: 8, md: 8, lg: 8, xl: 8 }, marginTop: { xs: 14, sm: 20, md: 20, lg: 24, xl: 26 }, textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="RawMaterial List" {...a11yProps(0)} />
                        <Tab label="Add New RawMaterial" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 }, p: 1 }}>RawMaterial List</Typography>
                {/* RawMaterial list */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ height: 425, width: '82%' }}>
                        <DataGrid
                            sx={{ backgroundColor: "#eee" }}
                            rows={RawMaterialdata}
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

                {/* RawMaterial addition part */}

                <Box sx={{ display: "flex", height: "100%", width: "100%", justifyContent: "center" }}>
                    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
                        <Box sx={{ p: 1 }}>
                            <Typography sx={{ fontSize: { xs: 15, sm: 25, md: 25, lg: 30, xl: 35 } }}>Add New RawMaterial</Typography>
                        </Box>


                        <Form onSubmit={handleRawMaterialAdd}>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: { xs: 125, sm: 130, md: 150, lg: 180, xl: 200, } },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField id="Product Type" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Product Type *" variant="outlined" />
                                <TextField id="Product Name" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Product Name *" variant="outlined" />
                                <TextField id="Stock" onChange={(e) => handleEdit(e)} required={true}  size="small" label="Stock *" variant="outlined" />
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
                                <TextField id="Box/Piece" onChange={(e) => handleEdit(e)} required={true}  size="small" label=" Box/Piece *" variant="outlined" />
                                <TextField id="Description" onChange={(e) => handleEdit(e)} required={true}  size="small" multiline maxRows={4} label="Description *" variant="outlined" />
                                <TextField id="HSN" onChange={(e) => handleEdit(e)} required={true} label="HSN Code *"  size="small"  variant="outlined" />
                                <TextField id="GST Percentage" onChange={(e) => handleEdit(e)} required={true} label="GST Percentage % *"  size="small" variant="outlined" />
                                <TextField id="Common Disc%" onChange={(e) => handleEdit(e)} required={true} label="Common Disc %"  size="small" variant="outlined" />

                            </Box>

                            <Button variant='contained' type="submit">Add</Button>
                        </Form>

                    </Card>
                </Box>
            </TabPanel>

        </Box>
    );
}






