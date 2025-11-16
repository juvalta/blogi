import React from "react";
import "./Card.css"
import Rating from '@mui/material/Rating'
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause"
import { Button, IconButton } from "@mui/material";
import { useState, useRef } from "react";

export const Card = ({
    imgSrc,
    imgAlt,
    bugName,
    audio,
    description,
    buttonText,
    link,
    hideRating = false,
}) => {

    const audioRef = useRef(null);

    function play() {
        if (!audio) return;

        if (!audioRef.current) {
            audioRef.current = new Audio(audio);


            audioRef.current.addEventListener("ended", () => {
                console.log("Sound finished playing!");
                setIsPlaying(false);
            });
        }

        audioRef.current.play()
        setIsPlaying(true);
    }

    function pause() {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    const [value, setValue] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);



    return (
        <div className="bug-card">
            {imgSrc && (
                <img src={imgSrc} className="bug-img" />
            )}
            {bugName && <h1 className="bug-name">{bugName}</h1>}
            <div className="audioButtonContainer">
                {audio &&
                    <IconButton className="play-audio-button"
                        onClick={() => {
                            if (isPlaying) {
                                pause();
                            } else {
                                play();
                            }
                        }}>
                        {isPlaying ? <PauseIcon /> : <VolumeUpIcon />}
                    </IconButton>}
            </div>
            {description && <p className="bug-description">{description}</p>}
            {!hideRating && (<div className="bug-rating">
                <Rating />
            </div>)}
            <div>
                {buttonText && link && (<Button variant="contained" style={{marginBottom: '10%', marginTop: '5%'}} className="bug-button" href={link}>{buttonText}</Button>)}
            </div>
        </div>
    )
}