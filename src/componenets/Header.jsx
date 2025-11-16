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

    const c = 30;
    const g = 6;
    const mass = 10000;
    const rs = (2 * g * mass) / (c * c);

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
                        <IconButton onClick={event => window.location.href = 'https://www.instagram.com/fullbrickdev/'} style={{color: "lightpurple"}}>
                            <InstagramIcon></InstagramIcon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <div style={{backgroundColor: "lightsteelblue", maxWidth: '80%', height: '80%'}}>

            </div>

            <div className="blackHole" style={{backgroundColor: 'black', borderRadius: '50%', width: `${1 * rs}px`, height: `${1 * rs}px`, position: 'relative'}}> 
                <div className="accretionDisk" style={{
                    backgroundColor: 'transparent', 
                    borderRadius: '50%',
                    width: `${3 * rs}px`,
                    height: `${3 * rs}px`, 
                    border: '2px solid gray',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}>

                    </div>

                <div className="unstable-photon-orbit" style={{
                    backgroundColor: 'transparent', 
                    borderRadius: '50%',
                    width: `${1,5 * rs}px`,
                    height: `${1,5 * rs}px`, 
                    border: '2px solid orange',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}>

                    </div>
            </div>

            <div style={{position: 'absolute', top: 0, right: 0, width: '100%', height: '100%'}}>
                {Array.from({ length: 10}).map((_, i) => (
                    <div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: `${i * 10}%`,
                        right: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))'
                    }}
                    />
                ))}
            </div>
            
            
        </>
    )
}

export default Header