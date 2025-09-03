import React from "react";
import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from "./header";
import underconstruction from "../assets/underconstruction.jpg";

function LandingPage() {

    return (
        <>
            <Header />
            <img src={underconstruction} />
        </>
    )
}

export default LandingPage