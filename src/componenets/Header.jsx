import React from "react";
import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";




function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ bgcolor: "#473e3d" }}>
                    <Toolbar>
                        <IconButton
                            onClick={handleClick}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            aria-controls={open ? 'navigationmenu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <MenuIcon />
                        </IconButton>


                        <Menu
                            anchorEl={anchorEl}
                            id="navigationmenu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}

                        >
                            <Link to='./tarusormustenherrasta'>
                            <MenuItem onClick={handleClose}>
                                <Typography>Taru sormusten herrasta</Typography>
                            </MenuItem>
                            </Link>
                            <Link to='./starwars'>
                            <MenuItem onClick={handleClose}>
                                <Typography>Star Wars</Typography>
                            </MenuItem>
                            </Link>
                            <Link to='./oulu'>
                            <MenuItem onClick={handleClose}>
                                <Typography>Oulu</Typography>
                            </MenuItem>
                            </Link>
                        </Menu>

                        <Typography> Juho Valtavaara </Typography>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <Typography color="inherit">Instagram</Typography>
                        <IconButton style={{ color: "lightpurple" }}>
                            <InstagramIcon onClick={event => window.location.href = 'https://www.instagram.com/fullbrickdev/'}></InstagramIcon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <Typography h6="true"> tässä blogini </Typography>
        </>
    )
}

export default Header