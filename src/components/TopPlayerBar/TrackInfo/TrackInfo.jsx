import React from "react";
import classes from "./TrackInfo.module.css";

const TrackInfo = ({track}) => {
    if (!track) {
        return (
            <div className={classes.placeholder}>
                <img
                    src="icons/apple-logo.png"
                    className={classes.appleLogo}
                    alt=""
                    aria-hidden="true"
                />
            </div>
        );
    }

    return (
        <div className={classes.trackInfo}>
            <img
                src={track.image}
                className={classes.cover}
                alt=""
            />

            <div className={classes.textBlock}>
                <div className={classes.trackTitle}>{track.title}</div>
                <div className={classes.trackArtist}>
                    {track.artist} — {track.album}
                </div>

                <div className={classes.progress}>
                    <div className={classes.progressFill}></div>
                </div>
            </div>
        </div>
    );
};

export default TrackInfo;
