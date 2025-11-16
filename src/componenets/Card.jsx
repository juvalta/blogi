import React from "react";
import "./Card.css"
import Rating from '@mui/material/Rating'
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";
import {useState, useEffect} from "react";

export const Card = ({
    imgSrc,
    imgAlt,
    bugName,
    audio,
    description,
    buttonText,
    link,
}) => {

    function play () {
        new Audio(audio).play()
    }

    const [value, setValue] = useState(0);

    useEffect(()=>{
        play()
    }, [value])

    return (
        <div className="bug-card">
            {imgSrc && (
                <img src={imgSrc} className="bug-img" />
            )}
            {bugName && <h1 className="bug-name">{bugName}</h1>}
            <div className="audioButtonContainer">
            {audio &&
                <IconButton className="play-audio-button" onClick={()=>setValue(value+1)}>
                    <VolumeUpIcon />
                </IconButton>}
            </div>
            {description && <p className="bug-description">{description}</p>}
            <div className="bug-rating">
                <Rating />
            </div>

        </div>
    )
}