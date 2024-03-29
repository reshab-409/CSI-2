import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useDispatch } from 'react-redux';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { authActions } from '../../Store/Auth-Slice';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { useNavigate } from 'react-router-dom';



// drawer functionality

const drawerWidth = 275;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function NavDrawer() {

    const dispatch = useDispatch();

    // Logout function
    const Logout = () => {
        dispatch(authActions.Logout());
        window.localStorage.removeItem("IniIn");
        navigate("/");
    };


    // navbar functionality
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };



    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // drawer functionality
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const [open9, setOpen9] = React.useState(false);
    const [open10, setOpen10] = React.useState(false);



    const handleClick = () => {
        setOpen1(!open1);
    };
    const handleClick1 = () => {
        setOpen2(!open2);
    };

    const handleClick2 = () => {
        setOpen3(!open3);
    };
    const handleClick3 = () => {
        setOpen4(!open4);
    };
    const handleClick4 = () => {
        setOpen5(!open5);
    };
    const handleClick5 = () => {
        setOpen6(!open6);
    };
    const handleClick6 = () => {
        setOpen7(!open7);
    };
    const handleClick7 = () => {
        setOpen8(!open8);
    };
    const handleClick8 = () => {
        setOpen9(!open9);
    };
    const handleClick9 = () => {
        setOpen10(!open10);
    };
    // CBM onclick event
    const Goto = () => {
        navigate("/CompanyBankMaster")
    };
    const Goto1 = () => {
        navigate("/CompanyMaster")
    };
    const Goto2 = () => {
        navigate("/CustomerMaster")
    };
    const Goto3 = () => {
        navigate("/ProductMaster")
    };
    const Goto4 = () => {
        navigate("/VendorMaster")
    };
    const Goto5 = () => {
        navigate("/RawMaterialMaster")
    };
    const Goto6 = () => {
        navigate("/GoDownMaster")
    };
    const Goto7 = () => {
        navigate("/ProductionUnitMaster")
    };
    const Goto8 = () => {
        navigate("/Stock")
    };
    const Goto9 = () => {
        navigate("/onHoldStock")
    };
    const Goto10 = () => {
        navigate("/ProductionStock")
    };
    const Goto11 = () => {
        navigate("/WorkOrder")
    };
    return (
        <>
            {/* NavBar  */}
            <AppBar position="fixed" color='secondary'>
                <Toolbar disableGutters>
                    <Box sx={{ ml: 2 }}>
                        {!open && <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>}
                        {open && <ChevronLeftIcon onClick={handleDrawerClose} />}
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "inherit" }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: "inherit",
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'inherit' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 3 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem>
                                Profile
                            </MenuItem>
                            <MenuItem>
                                Account
                            </MenuItem>
                            <MenuItem>
                                Dashboard
                            </MenuItem>
                            <MenuItem onClick={Logout}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* drawer */}

            <Box>
                <Drawer
                    variant="permanent"
                    open={open}
                >
                    <Toolbar />
                    <List>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Master Module" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                {/* Master modules  */}
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto1}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Company Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Company Bank Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto2}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Customer Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto4}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Vendor Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto3} >
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Product Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto5}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Raw Material Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto6}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Godown Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto7}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Production Unit Master" />
                                </ListItemButton>


                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClick1}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inventory Module" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto8}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Stock" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto9}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="On Hold Stock" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto10}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Production Stock" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClick2}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Production Module" />
                        </ListItemButton>



                        <ListItemButton onClick={handleClick4}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Purchase Module" />
                            {open5 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open5} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Purchase Entry" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="RFQ" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>



                    <Divider />



                    <List>
                        <ListItemButton onClick={handleClick5}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sales Module" />
                            {open6 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open6} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={Goto11}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Work Order" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Proforma Invoice" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Invoice" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Delivery Note" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Quotation" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClick6}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Expence Module" />
                        </ListItemButton>

                        <ListItemButton onClick={handleClick7}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Payment Management" />
                            {open8 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Sale Invoice" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Purchase Invoice" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClick8}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bank Management" />
                        </ListItemButton>
                        <Collapse in={open9} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            </List>
                        </Collapse>



                        <Divider />

                        <ListItemButton>
                            <ListItemIcon>
                                <ReportGmailerrorredIcon />
                            </ListItemIcon>
                            <ListItemText primary="Report" />
                        </ListItemButton>
                    </List>
                </Drawer>
            </Box>
        </>
    );
};