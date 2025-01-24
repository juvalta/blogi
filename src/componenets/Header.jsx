import React from "react";
import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';

function Header() {

    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

<Typography> Juho Valtavaara </Typography>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <Typography color="inherit">Instagram</Typography>
                        <IconButton style={{color: "lightpurple"}}>
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